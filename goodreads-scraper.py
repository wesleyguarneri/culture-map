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

        except Exception as e:
            logging.error(e)

    def get_books_from_list(self):
        list_url = "https://www.goodreads.com/list/show/2702.Best_Canadian_Literature"
        country = "CAN"
        max_results = 5

        try:
            self.driver.get(list_url)
            
            for i in range(max_results):
                time.sleep(0.5)
                book_listing_button = self.driver.find_element(By.CSS_SELECTOR,'#all_votes > table > tbody > tr:nth-child({}) > td:nth-child(3) > a > span'.format(i+1))
                book_listing_button.click()

                time.sleep(0.5)

                try:
                    login_button = self.driver.find_element(By.CSS_SELECTOR,'body > div.Overlay.Overlay--floating > div > div.Overlay__header > div > div > button')
                    if login_button:
                        login_button.click()
                        time.sleep(0.5)
                except Exception as e:
                    print('login error')
                


                title = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageTitleSection > div.BookPageTitleSection__title > h1').text
                author = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__contributor > h3 > div > span:nth-child(1) > a > span.ContributorLink__name').text

                year = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > span:nth-child(1) > span > div > p:nth-child(2)').text
                year = str(year.split(' ')[4])

                description = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__description > div > div.TruncatedContent__text.TruncatedContent__text--large > div > div > span').text

                try:
                    details_button = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > div > button')
                    details_button.click()
                    time.sleep(0.25)
                except Exception as e:
                    print('detail button error')

                # isbn = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookDetails > div > span:nth-child(2) > div.BookDetails__list > span > div > dl > div:nth-child(3) > dd > div > div.TruncatedContent__text.TruncatedContent__text--small').text
                # isbn = isbn.split(' ')[0]

                dt_elements = self.driver.find_elements(By.CSS_SELECTOR, "dl > div > dt")

                language = ""
                isbn = ""

                for dt in dt_elements:
                    if dt.text.strip() == "Language":
                        parent_div = dt.find_element(By.XPATH, "..") 
                        dd = parent_div.find_element(By.TAG_NAME, "dd")
                        language = dd.text.strip()

                    if dt.text.strip() == "ISBN":
                        isbn_parent_div = dt.find_element(By.XPATH, "..") 
                        isbn_dd = isbn_parent_div.find_element(By.TAG_NAME, "dd")
                        isbn = isbn_dd.text.strip()
                        isbn = isbn.split(' ')[0]


                        

                genreList = []
                for idx in range(3):
                    genre = self.driver.find_element(By.CSS_SELECTOR,'#__next > div.PageFrame.PageFrame--siteHeaderBanner > main > div.BookPage__gridContainer > div.BookPage__rightColumn > div.BookPage__mainContent > div.BookPageMetadataSection > div.BookPageMetadataSection__genres > ul > span:nth-child(1) > span:nth-child({})'.format(idx+2)).text
                    if genre == 'Classics':
                        idx = idx-1
                        continue
                    genreList.append(genre)
                
                genres = ','.join(genreList)

                print(genres)
                print(language)
                print(isbn)
                
                self.driver.back()

                self.cur.execute("INSERT INTO books (title,author,isbn,year,genre,country,description,language) VALUES (%s, %s, %s,%s, %s, %s,%s,%s)", 
                (
                    title,
                    author,
                    isbn,
                    year,
                    genres,
                    country,
                    description,
                    language
                ))
                self.conn.commit()
        except Exception as e:
            logging.error(e)


    def run(self):
        
        options = Options()
        options.headless = True
        service = Service(executable_path='./geckodriver')
        self.connect_to_db()

        self.driver = Firefox(service=service, options=options)

        self.get_books_from_list()
        self.driver.close()

if __name__ == "__main__":
    l = GoodreadsScraper()
    l.run()