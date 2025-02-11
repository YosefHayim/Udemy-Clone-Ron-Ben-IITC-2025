# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from selenium.common.exceptions import NoSuchElementException
# import time
# import logging
# import os

# # Access the website
# driver = webdriver.Chrome()
# try:
#     driver.get("https://atid.store/")
#     time.sleep(2)
#     print("Success openning website atid.store✅")
# except:
#     print("Error accessing the site❌")
#     driver.quit()

# # find, insert and click search icon
# try:
#     search_icon = driver.find_element(By.XPATH, "//a[@aria-label='Search icon link']")
#     print("Success finding search icon✅")
#     search_icon.click()
#     print("Success clicking search icon✅")
# except:
#     print("Error finding or clicking search icon❌")

# # insert product and search for it 
# try:
#     search_box = driver.find_element(By.XPATH, "//input[@placeholder='Search …']")
#     time.sleep(1)
#     print("Success finding search box✅")
#     search_box.send_keys("hoodie")
#     time.sleep(1)
#     print("Success inserting product name✅")
#     search_box.send_keys(Keys.RETURN)
#     time.sleep(1)
#     print("Success clicking on enter for searching the inserted product✅")
# except:
#     print("Error finding or inserting product name❌")

# #check the search result ("hoodie")-------------------------------------------------------------------------------------------------------------------------------
# if "https://atid.store/?s=hoodie" in driver.current_url:
#     print("Product found in earch results✅")
# else:
#     print("Product not found in earch results❌")

# #check the product and click on it
# try:
#     product = driver.find_element(By.XPATH, "//a[@href='https://atid.store/product/black-hoodie/']//img[@class='attachment-large size-large wp-post-image']")
#     print("Success finding the product✅")
#     product.click()
#     print("Success clicking on the product✅")
# except:
#     print("Error finding the product image❌")
#     print(driver.current_url)

# #check the product page-------------------------------------------------------------------------------------------------------------------------------
# if "https://atid.store/product/black-hoodie/" == driver.current_url:
#     print("Success accessing the product page✅")
# else:
#     print("Error accessing the product page❌")

# try:
#     title = (driver.find_element(By.XPATH, "//h1[normalize-space()='Black Hoodie']")).text
#     assert "Hoodie" in title, "Product name not found in title ❌"
#     print("Product name found in title✅")
#     assert driver.find_element(By.XPATH, "//img[@role='presentation']"), "Product image not found❌"
#     print("Product image found✅")
#     assert driver.find_element(By.XPATH, "//div[@class='woocommerce-product-details__short-description']//p[contains(text(),'Nam nec tellus a odio tincidunt auctor a ornare od')]"), "Product description not found❌"
#     print("Product description found✅")
#     assert driver.find_element(By.XPATH, "//div[@class='summary entry-summary']//bdi[1]"), "Product price not found❌"
#     print("Product price found✅")
# except AssertionError as e:
#     print(e) 

# #check the additional information-------------------------------------------------------------------------------------------------------------------------------
# try:
#     additional_information = driver.find_element(By.XPATH, "//a[normalize-space()='Additional information']")
    
#     assert additional_information is not None, "Additional information not found ❌"
#     print("Additional information found ✅")

#     additional_information.click()
#     print("Success clicking on additional information ✅")

#     assert driver.find_element(By.XPATH, "//th[@class='woocommerce-product-attributes-item__label']"), "Additional information table not found ❌"
#     print("Additional information found ✅")

# except NoSuchElementException:
#     print("Error: Additional information not found ❌")
# except Exception as e:
#     print(f"Unexpected error: {e} ❌")


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import logging
import os

# Configure logging to save in a file
log_filename = "test_execution.log"
logging.basicConfig(
    filename=log_filename,
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

# Create a folder for screenshots
screenshot_folder = "screenshots"
os.makedirs(screenshot_folder, exist_ok=True)

def take_screenshot(driver, name):
    """Take a screenshot and save it in the 'screenshots' folder."""
    path = os.path.join(screenshot_folder, f"{name}.png")
    driver.save_screenshot(path)
    logging.info(f"Screenshot saved: {path}")

# Initialize WebDriver
driver = webdriver.Chrome()

try:
    driver.get("https://atid.store/")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    logging.info("Successfully opened website: https://atid.store")
    take_screenshot(driver, "01_site_opened")
except Exception as e:
    logging.error(f"Error accessing the site: {e}")
    driver.quit()

# Find and click search icon
try:
    search_icon = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[@aria-label='Search icon link']"))
    )
    logging.info("Search icon found")
    search_icon.click()
    logging.info("Search icon clicked")
    take_screenshot(driver, "02_search_icon_clicked")
except TimeoutException:
    logging.error("Error finding or clicking search icon")

# Insert product and search for it
try:
    search_box = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Search …']"))
    )
    logging.info("Search box found")
    search_box.send_keys("hoodie")
    logging.info("Product name inserted")
    search_box.send_keys(Keys.RETURN)
    logging.info("Enter key pressed to search")
    take_screenshot(driver, "03_product_search")
except TimeoutException:
    logging.error("Error finding or inserting product name")

# Check search results
if "https://atid.store/?s=hoodie" in driver.current_url:
    logging.info("Product found in search results")
    take_screenshot(driver, "04_search_results")
else:
    logging.error("Product not found in search results")

# Find and click on the product
try:
    product = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[@href='https://atid.store/product/black-hoodie/']//img"))
    )
    logging.info("Product found")
    product.click()
    logging.info("Product clicked")
    take_screenshot(driver, "05_product_clicked")
except TimeoutException:
    logging.error("Error finding the product image")

# Check product page
if driver.current_url == "https://atid.store/product/black-hoodie/":
    logging.info("Successfully accessed the product page")
    take_screenshot(driver, "06_product_page")
else:
    logging.error("Error accessing the product page")

# Check product information
try:
    title = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//h1[normalize-space()='Black Hoodie']"))
    ).text
    assert "Hoodie" in title, "Product name not found in title"
    logging.info("Product name found in title")

    assert WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//img[@role='presentation']"))
    ), "Product image not found"
    logging.info("Product image found")

    assert WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='woocommerce-product-details__short-description']//p"))
    ), "Product description not found"
    logging.info("Product description found")

    assert WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//div[@class='summary entry-summary']//bdi[1]"))
    ), "Product price not found"
    logging.info("Product price found")

    take_screenshot(driver, "07_product_validation")
except AssertionError as e:
    logging.error(e)

# Check additional information
try:
    additional_information = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, "//a[normalize-space()='Additional information']"))
    )
    logging.info("Additional information tab found")
    additional_information.click()
    logging.info("Successfully clicked on additional information tab")

    assert WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//th[@class='woocommerce-product-attributes-item__label']"))
    ), "Additional information table not found"
    logging.info("Additional information table found")

    take_screenshot(driver, "08_additional_info")
except NoSuchElementException:
    logging.error("Error: Additional information not found")
except TimeoutException:
    logging.error("Error: Additional information took too long to load")
except Exception as e:
    logging.error(f"Unexpected error: {e}")

# Close WebDriver
driver.quit()
logging.info("Test execution completed")
print("Test execution completed. Check the log file for more information. 🚀🚀🚀🚀🚀🚀")