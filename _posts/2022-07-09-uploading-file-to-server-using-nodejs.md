---
title: Uploading file to the server using Node and HTML5
date: 2022-07-09 00:00 +0000
description: In this article you will learn how you can upload a file to the server using node.js and HTML5.
author_profile: true
published: true
read_time: true
comments: true
share: true
related: true
toc: true
toc_sticky: true
image: https://i.imgur.com/qxXxmBa.png
header:
  image: https://i.imgur.com/zipiW93.png
  teaser: https://i.imgur.com/qxXxmBa.png
  og_image: https://i.imgur.com/qxXxmBa.png
tags:
  - webdev
  - tutorial
  - beginners
  - nodejs
---

> In this article you will learn how you can upload a file to the server using node.js and HTML5.

## Client side file upload

On the client side we need to use a `file` type `<input>` html element that can hold the file content from the client machine/device. Remember file type input element will parse the data and put it in the form.

```html
<input type="file" name="filetoupload" /><br />
```

The input element with `type=”file”` allows us to choose one or more files from your device (mobile or machine). That chosen file can be uploaded to the server using form submission.

{: .notice--success}
🏆 **Pro Tip** \
\
Using the File API, which was added to the DOM in HTML5, it's now possible for web content to ask the user to select local files and then read the contents of those files. This selection can be done by either using an HTML `<input type="file">` element or by drag and drop. The File API makes it possible to access a FileList containing File objects representing the files selected by the user.

## What is multipart/form data?

Suppose you have large or small unstructured data. Suppose you want to upload an image file or excel file. At that time you must consider uploading the file to the server as binary data. It's just an array of integers with 0 and 1.

Therefore, you should instruct your html form to **not encode** the form file input value and just send it to the server as raw binary data format. In order to achieve this you must set `enctype="multipart/form-data"` in your form tag.

Example:

```html
<form action="fileupload" method="post" enctype="multipart/form-data">
  <input type="file" name="filetoupload" /><br />
  <input type="submit" />
</form>
```

In this example, I want to send the data as binary array format to the server. And let the server do the parsing of the file and create or save a file in the server disk.

So by this time we understood that from the client machine I can use the browser to read my file content and put it in the HTML form for further access. I will create a submit button to post the form with the content of the file uploaded by the client.

## How to parse files on the server?

Well you could do your own parsing, however I will choose [formidable](https://www.npmjs.com/package/formidable) node package to do the parsing for me. This module is excellent and it can be used for video and image files as well.

In the server file let’s create an upload method.

```ts
app.post('/fileupload', (req, res) => {
  const form = formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const newpath = 'C:/Users/Rupesh/' + files.filetoupload.name;
    var oldpath = files.filetoupload.path;

    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write(`${files.filetoupload.name} File uploaded and moved!`);
      res.end();
    });
  });
});
```

## Testing file upload

### Run the server `npm run server`

![](https://i.imgur.com/qCbTbnB.png){: .full}

### Navigate to the upload page http://localhost:3000/

![](https://i.imgur.com/ZS6l9fw.png){: .full}

### Select file and submit

![](https://i.imgur.com/r1Iz2mM.png){: .full}

## Inspecting multipart form data

I told you that client browser can submit the file content in binary data. If you want to visualize the form data. Then upload any file and use [`fiddler`](https://www.telerik.com/fiddler) and check how content in binary data format looks like.

![](https://i.imgur.com/NlnKSAp.png){: .full}

Finally, I can see my file got saved in my desired disk.

![](https://i.imgur.com/pOVx2DS.png){: .full}

## Learning materials

- Here is the [complete source code](https://github.com/rupeshtiwari/coding-example-upload-file)

## References

- [DOM File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [Formidable Node Package](https://www.npmjs.com/package/formidable)

---

_Thanks for reading my article till end. I hope you learned something special today. If you enjoyed this article then please share to your friends and if you have suggestions or thoughts to share with me then please write in the comment box._

<div class="notice--success">
<strong>💖 Say 👋 to me!</strong>
<br>Rupesh Tiwari
<br>Founder of <a href="https://www.fullstackmaster.net">Fullstack Master </a>
<br>Email: <a href="mailto:rupesh.tiwari.info@gmail.com?subject=Hi">rupesh.tiwari.info@gmail.com</a>
<br>Website: <a href="https://www.rupeshtiwari.com">RupeshTiwari.com </a>
</div>
![](https://imgur.com/a32nUcu.png)
