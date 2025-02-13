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

# Open the website
try:
    driver.get("https://atid.store/")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    logging.info("✅Successfully opened website: https://atid.store")
    take_screenshot(driver, "01_site_opened")
except Exception as e:
    logging.error(f"Error accessing the site: {e}")
    driver.quit()    

# Check Home element in navbar
try:
    home_link = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, "//li[@id='menu-item-381']//a[@class='menu-link'][normalize-space()='Home']"))
    )
    logging.info("Home link found ✅")
    home_link.click()
    logging.info("Home link clicked ✅")
    take_screenshot(driver, "02_home_clicked")
except TimeoutException:
    logging.error("Error finding or clicking Home link ❌")