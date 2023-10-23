# RVTV

This README.md file provides essential information and instructions for customizing and configuring your website. Please follow the steps below to make the necessary changes.

## Table of Contents
- [Instructions](#instructions)
- [Index](#index)
- [Footer](#footer)
- [Head](#head)
- [robots.txt](#robotstxt)
- [sitemap.xml](#sitemapxml)
- [Instructions](#note)
- [Youtube-Videos](#youtube-videos)
- [Multilingual-Support](#multilingual-support)
- [License](#license)

---

## Instructions

Before deploying your website, please follow these instructions to customize various aspects of your site:

### Index

In your website's HTML, make sure to include the following `<link>` tag in the `<head>` section to specify the canonical URL:

```html 
<link rel="canonical" href="https://www.your-website.com/">
```

## Footer
Please change the following details in your website's Privacy Policy, Cookie Policy, and Terms and Conditions:

	Address
	Website URL
	Contact email
	Links for Privacy Policy, Cookie Policy, and Terms and Conditions
	You can generate these legal documents using iubenda.


## Head
In the <head> section of your website, ensure that the canonical URL is correctly set as described in the "Index" section above.






### robots.txt
Open the robots.txt file and update the URL to the correct one if it exists. This file controls search engine crawlers' access to your website.

```txt
Sitemap: https://www.your-website.com/sitemap.xml  //Change URL to correct URL if the correct URL exists
```




### sitemap.xml
Within the sitemap.xml file, update the <loc> tag with the correct URL of your website:

```xml
<loc>https://www.your-website.com/</loc>
```

This file helps search engines index your website correctly.






### Youtube Videos
To update the YouTube videos on your website, simply replace the video links and titles in the JavaScript code below:

    // Replace the video link
    // Replace the video titles
    etc. 
```js
const loadYouTubeIframes = () => {
    /* Weekly Rally */

    const video1Container = document.getElementById('video1-container');
    const video2Container = document.getElementById('video2-container');
    const video3Container = document.getElementById('video3-container');


    video1Container.innerHTML = `<iframe width="100%" height="225" src="YOUR_VIDEO_LINK_HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    

    video2Container.innerHTML = `<iframe width="100%" height="225" src="YOUR_VIDEO_LINK_HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    

    video3Container.innerHTML = `<iframe width="100%" height="225" src="YOUR_VIDEO_LINK_HERE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    
    /* Title */
    
    const video1titel = document.getElementById('video1-title');
    const video2titel = document.getElementById('video2-title');
    const video3titel = document.getElementById('video3-title');
    
    video1titel.textContent = 'Your Video 1 Title';
    video2titel.textContent = 'Your Video 2 Title';
    video3titel.textContent = 'Your Video 3 Title';
    
    // ... (repeat the same process for video4, video5, and video6, title4, title 5, title 6)
};
```




### Note: 
Always ensure that your website is configured correctly, and all URLs and information are up to date.

For any further assistance or questions, please contact us at '"your-contact-email@exmple.com"'.

Thank you for using this template, and best of luck with your website!


Please replace `"https://www.your-website.com/"` and `"your-contact-email@example.com"` with the actual URLs and contact email address for your website.

### Multilingual Support
Before deploying this website, ensure that you have customized the content in each `{language}.json` file. Replace the `"RVTV.about-us-paragraph"` key with the desired text in your chosen language. You should manually translate and insert this text into all language files to provide a fully localized experience.

Here's an example in English for your `{language}.json` file:
```json
{
  "RVTV.about-us-paragraph": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
}
```

Replace the content inside `"RVTV.about-us-paragraph"` with the text that matches the language you are translating to. Repeat this process for each supported language, ensuring your website provides a seamless experience for users around the world.


## License

Node.js is available under the
[MIT license](https://opensource.org/licenses/MIT). Node.js also includes
external libraries that are available under a variety of licenses.  See
[LICENSE](https://github.com/nodejs/node/blob/HEAD/LICENSE) for the full
license text.
