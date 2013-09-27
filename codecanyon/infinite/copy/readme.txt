Infinite Pages was designed for displaying large pieces of HTML data in more manageable chunks.

When the reader reaches the end of the page, the script loads more content.

It implements an 'infinite scoll' mechanism to load data, so the reader doesn't have to load enourmous amounts
of text / images onto the page all at once. This ensures a more comfortable reading experience for the user.

Infinite Pages works by 'paginating' your data, and then feeding that data to the user 'on demand'.
This technique is known as 'lazy loading', and is becoming more and more common on the internet.
An example of infinite scrolling is Google Images, where content is loaded as requested by the user.

The script also works with images. That is to say, if your data has an <IMG> HTML tag inside it,
it will be loaded onto that page as requested.

Infinite Pages is easy to setup on your site, and is also very customizeable. The possibilities you can achieve with
this script are nearly 'infinite' in themselves.

=========
Getting started
=========

Try testing out the script for yourself at:

http://demos.eire-media.com/infinite/

Now you know how it works, first step is to have your content ready for your readership.
In our live example, we've included a royalty free version of Shakespeare's Hamlet.
The text is repeated countless times to simulate a huge book of text.
When you reach the end of the book, you will be alerted by the script.
But you can include ANYTHING you like. Full blown image galleries, Books, Documentation, whatever.

Do not run any of the files in the 'content' folder from the file-system, always test them on a server.

All our data is stored in a file called 'data.txt'

This is really a HTML file in disguise. Note the actual text is HTML markup. But you are certainly free
to include raw text in your document, providing it has line breaks.

In this script, we will be loading 150 lines of text at a time.
The script works by chopping the data contained in 'data.txt' into 150-line segments

You can decide how many lines of text each page displays by going to line 70 of 'grab.php'
and editing the value.

$display = 150;

$display is how many LINES you will need parsed, per page
150 Is the default value, and is a 'safe bet' if you want to keep your readers satisfied

Decreasing this value may break the script, depending on what content is displayed on the page.

[ The first page's 'data-height' MUST exceed the height of the page in order to work ]

All this means is, 150 lines of text is sufficient for the script to work.)

You can access different pages of the script by saying:

http://www.example.com/infinite/grab.php?p=1
http://www.example.cominfinite/grab.php?p=2
http://www.example.com/infinite/grab.php?p=3

Where 'p' is the page of the data you are requesting.

Note: In order for the script to determine if you have reached the end of the page, you must include
the following code into the very bottom of your data-file:

<p style="visibility:hidden">xxfinishedxx</p>

This is a signal to the script you have reached the end of your content, and no more data will be loaded, or scrolled.

You can change the file-name of 'data.txt' to anything you like, e.g;

'content.html'
'text.dat'
'stuff.txt'

The extension doesn't matter. If you don't want people seeing your data-file then be clever in the naming process.
In our live example, you can access it at:

http://demos.eire-media.com/infinite/data.txt

But make sure you change the relative name of the file in 'grab.php'

On line 77, you will see:

$data = file('data.txt');

Change this to whatever you see fit.

When you are happy with your data file and modified it with your own content, 
Then upload the 'content' folder to your server. So it points to something like this:

http://www.example.com/content/

** You will need to CHMOD the file data.txt to 777 **
** This is a permission on the server which grants PHP files the permission to read the file **

========================

Customization:

You may rebrand this application as you see fit. Go wild with your CSS & HTML.

You can change the appearance and color of the AJAX 'throbber' image by going to:

http://www.ajaxload.info

By default, the actual Infinite Pages .HTML page is contained in a wrapper frame.
This is purely for presentational purposes, and can be excluded if you want.
If so, you will only need page.html to display your content.

As this script was tested (and works) in Safari, I see no reason it shouldn't work on an iPhone aswell.
All the content is by default set to display at 100% of the screen width,
so the text will 'wrap' quite nicely to the screen. If you choose to go down this avenue,
I would exclude the wrapper frame contained in 'index.html'

========================

This script was tested in:
Internet Explorer 8.0
Firefox 3.x.x
Google Chrome 5.0
Safari 5.0

========================

This script requires a Javascript enabled browser to work
This script requires a PHP enabled server to work
========================
