package tests

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.remote.RemoteWebDriver
import org.openqa.selenium.remote.DesiredCapabilities

import io.github.bonigarcia.wdm.WebDriverManager

import java.net.URL

object WebdriverSetup {
    fun getDriver(): WebDriver {
        if (System.getenv("TRAVIS") == "true") {
            val capabilities = DesiredCapabilities.chrome()
            return RemoteWebDriver(URL("http://127.0.0.1:4444/wd/hub"), capabilities)
        } else {
            WebDriverManager.chromedriver().setup()
            return ChromeDriver()
        }
    }
}
