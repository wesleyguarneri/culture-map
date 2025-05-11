from selenium import webdriver
from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
import pandas as pd
import logging
import time
import psycopg2



class GoodreadsScraper():

    def connect_to_db(self):
        try:
            self.conn = psycopg2.connect(host="localhost", database="postgres", user="admin", password="postgres")
            self.cur = self.conn.cursor()

            data = {
                "title":"Moby-Dick",
                "author":"Herman Melville",
                "isbn":"9780143105954",
                "year":"1851",
                "genre":"Adventure, Epic, Psychological Fiction",
                "country":"USA",
                "description": "description",
                "language": "english"
            }
            self.cur.execute("INSERT INTO books (title,author,isbn,year,genre,country,description) VALUES (%s, %s, %s,%s, %s, %s,%s)", 
                (
                    data["title"],
                    data["author"],
                    data["isbn"],
                    data["year"],
                    data["genre"],
                    data["country"],
                    data["description"],
                    data['language']
                ))
            self.conn.commit()
        except Exception as e:
            logging.error(e)

    def get_books_from_list(self):
        list_url = "https://www.goodreads.com/list/show/1339.Best_British_and_Irish_Literature"
        country = "GBR"
        max_results = 1

        try:
            self.driver.get(list_url)
            
            for i in range(max_results):
                time.sleep(0.25)
                book_listing_button = self.driver.find_element(By.CSS_SELECTOR,'#all_votes > table > tbody > tr:nth-child({}) > td:nth-child(3) > a > span'.format(i+1))
                book_listing_button.click()

                time.sleep(0.25)

                login_button = self.driver.find_element(By.CSS_SELECTOR,'body > div.Overlay.Overlay--floating > div > div.Overlay__header > div > div > button')
                if login_button:
                    login_button.click()
                    time.sleep(0.25)

                title = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageTitleSection > div.BookPageTitleSection__title > h1').text
                author = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__contributor > h3 > div > span:nth-child(1) > a > span.ContributorLink__name').text

                year = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > span:nth-child(1) > span > div > p:nth-child(2)').text
                year = year.split(' ')[4]
                description = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__description > div > div.TruncatedContent__text.TruncatedContent__text--large > div > div > span').text
                print("{} By {}".format(title,author))
                print("{}".format(year))
                print("{}".format(description))

                details_button = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > div > button')
                details_button.click()

                isbn = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > span:nth-child(2) > div.BookDetails__list > span > div > dl > div:nth-child(3) > dd > div > div.TruncatedContent__text.TruncatedContent__text--small').text
                isbn = isbn.split(' ')[0]

                language = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > span:nth-child(2) > div.BookDetails__list > span > div > dl > div:nth-child(5) > dd > div > div.TruncatedContent__text.TruncatedContent__text--small').text
                
                genres = []
                for idx in range(3):
                    genre = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__genres > ul > span:nth-child(1) > span:nth-child({})'.format(idx+2)).text
                    if genre == 'Classics':
                        idx = idx-1
                        continue
                    genres.append(genre)
                
                print(genres)
                print(language)
                    
                print(isbn)
                
                self.driver.back()
        except Exception as e:
            logging.error(e)


    def run(self):
        options = Options()
        options.headless = True
        service = Service(executable_path='./geckodriver')
        self.driver = Firefox(service=service, options=options)

        self.get_books_from_list()
        # self.connect_to_db()
        self.driver.close()

if __name__ == "__main__":
    l = GoodreadsScraper()
    l.run()