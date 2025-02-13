from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging
import os

# Configure logging to save in a file
log_filename = "test_navbar.log"
logging.basicConfig(
    filename=log_filename,
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

# Create a folder for screenshots
screenshot_folder = "screenshots_navbar"
os.makedirs(screenshot_folder, exist_ok=True)

def take_screenshot(driver, name):
    """Take a screenshot and save it in the 'screenshots' folder."""
    path = os.path.join(screenshot_folder, f"{name}.png")
    driver.save_screenshot(path)
    logging.info(f"Screenshot saved: {path}")

# Initialize WebDriver
driver = webdriver.Chrome()
driver.maximize_window()

def click_navbar_element(driver, xpath, xpath_2, page_name, screenshot_name):
    try:
        driver.get("https://atid.store/")
        
        # Wait the navbar element to be clickable
        navbar_element = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.XPATH, xpath))
        )
        logging.info(f"{page_name} link found ✅")
        
        # Click the navbar element
        navbar_element.click()
        logging.info(f"{page_name} link clicked ✅")
        
        # Check if the page was successfully opened
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, xpath_2))
        )
        logging.info(f"Successfully opened {page_name} page ✅")
        
        # Take a screenshot
        take_screenshot(driver, screenshot_name)
        
    except TimeoutException:
        logging.error(f"Error finding or clicking {page_name} link ❌")

# Using the function with all navbar elements 
click_navbar_element(driver, 
                     "//li[@id='menu-item-381']//a[@class='menu-link'][normalize-space()='Home']",
                     "//h1[normalize-space()='ATID Demo Store']", 
                     "Home", 
                     "02_Home_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-45']//a[@class='menu-link'][normalize-space()='Store']",
                     "//p[@class='woocommerce-result-count']", 
                     "Store", 
                     "02_Store_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-266']//a[@class='menu-link'][normalize-space()='Men']",
                     "//h1[normalize-space()='Men']", 
                     "Men", 
                     "02_Men_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-267']//a[@class='menu-link'][normalize-space()='Women']",
                     "//h1[normalize-space()='Women']", 
                     "Women", 
                     "02_Women_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-671']//a[@class='menu-link'][normalize-space()='Accessories']",
                     "//h1[normalize-space()='Accessories']", 
                     "Accessories", 
                     "02_Acessories_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-828']//a[@class='menu-link'][normalize-space()='About']",
                     "//h1[normalize-space()='About Us']", 
                     "About Us", 
                     "02_About_Us_clicked")

click_navbar_element(driver, 
                     "//li[@id='menu-item-829']//a[@class='menu-link'][normalize-space()='Contact Us']",
                     "//h1[normalize-space()='Contact Us']", 
                     "Contact Us", 
                     "02_Contact_Us_clicked")
