---
layout: post
title: How to use VLOOKUP in Microsoft Excel
date: 2011-08-03T17:58:41.000Z
type: post
published: true
comments: true
social-share: true
categories:
  - Excel
tags:
  - Excel Sheet
  - VLOOKUP
meta:
  _edit_last: "1"
  _wpas_done_twitter: "1"
  _wpas_skip_yup: "1"
  _wpas_skip_ms: "1"
  _jetpack_related_posts_cache: >-
    a:1:{s:32:"8f6677c9d6b0f903e98ad32ec61f8deb";a:2:{s:7:"expires";i:1610275406;s:7:"payload";a:3:{i:0;a:1:{s:2:"id";i:311;}i:1;a:1:{s:2:"id";i:361;}i:2;a:1:{s:2:"id";i:118;}}}}
  _qode-like: "0"
  wpmm_postgrid_views: "429"
author:
  login: rupeshtiwari
  email: roopkt@gmail.com
  display_name: Rupesh Tiwari
  first_name: Rupesh
  last_name: Tiwari
permalink: /how-to-use-vlookup/
description: How to use VLOOKUP in Microsoft Excel
toc: true
---

<p>
				Today, I learned about one Excel Sheet Formula <strong>"VLOOKUP"</strong>. It is very useful formula that gives us the power to search a value in a particular column.  </p>
<p><strong>Problem that VLOOKUP can solve.</strong></p>
<p>Let's say you have one Excel Sheet of Employee Data. You have 2 sheets inside the Excel Book. One sheet is for Employee ID, Address and Name. And in sheet number 2 you have Employee ID and Employee Address. In Sheet number 1 you have only Employee ID and Name data present, you want the address of all the employees. Address can be found from the sheet#2. If we go manually and  do search for address for each employee ID and paste the same data in Sheet1 then it would be a long task and boring stuff to do :(</p>
<p>In order to automate the search functionality <strong>VLOOKUP</strong> is there in Excel Sheet.</p>
<p>Let's solve our previous problem, see below is the Sheet1 we have named it as <strong>main. </strong>It has 3 Cols EmpId, Name and Address.</p>
<p><a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/1.png"><img class="alignnone size-full wp-image-439" title="1" src="{{ site.baseurl }}/assets/2011/08/1.png" alt="" width="257" height="149" /></a></p>
<p>Below is the image of Sheet2, lets rename it to address. It has 2 cols; EmpId and Address.<a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/2.png"><img class="alignnone size-full wp-image-440" title="2" src="{{ site.baseurl }}/assets/2011/08/2.png" alt="" width="263" height="144" /></a></p>
<p>Now in order to search Address we have to take the EmpId one by one from sheet1 and check in Address sheet that if the Employee ID is found or not. If employee Id is found that we need its address.</p>
<p><strong>VLOOKUP formula building</strong></p>
<p>In order to build the expression for VLOOKUP, please Follow below steps.</p>
<p><strong>Step1:</strong></p>
<p>Click on fx in sheet1, it will open up an Insert Function Pop up Window. Then Type VLOOKUP in text box of the pop-up window and click on Go button. It will search and select the VLOOKUP function then click on ok Button.<a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/3.jpg"><img class="alignnone size-medium wp-image-441" title="3" src="{{ site.baseurl }}/assets/2011/08/3.jpg?w=300" alt="" width="300" height="138" /></a></p>
<p><strong>Step2: </strong></p>
<p>This step is crucial, now we are going to build the expression that will do the search. VLOOKUP has 4 arguments:</p>
<p>1) <strong>Lookup_value</strong>: It is the value that you want to search for. We have written A2 because we want to search for first Employee Id which value is 1 and it is in A2 column. <span style="text-decoration:underline;">Lookup_value: A2</span></p>
<p><span style="text-decoration:underline;"><a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/4.jpg"><img class="alignnone size-medium wp-image-442" title="4" src="{{ site.baseurl }}/assets/2011/08/4.jpg?w=300" alt="" width="300" height="220" /></a></span></p>
<p>2) <strong>Table_array: </strong>As its name suggests, it is an array of semicolon (<strong>;</strong>) separated key value pair data. Key value paris are separated by comma (<strong>,</strong>). For example: {1,"Brajrajnagar"; 2,"Jharsuguda"; 3,"Mumbai"}. It is the data through which the function will look up for the value we are searching for. For Table_array field, you have to write sheet name (<em>from where you want to search address</em>) and the column range (<em>where the data is there</em>) separated by Exclamatory (<strong>!</strong>) mark. Like in our case, we have to search in <strong>address </strong>sheet and our column range is from <strong>A2</strong> to <strong>B4</strong> (A2:B4). Therefore, we will write <strong>address!A2:B4. </strong>Now, this is perfect however, if you see in my above screen shot, I have written address!<strong>$</strong>A<strong>$</strong>2:<strong>$</strong>B<strong>$</strong>4<strong>. </strong>Each column name is separated by Dollar (<strong>$) </strong>sign from the both side. It is because, if you want to write the formula for the next value; say for EmpId = 2 then there you don't have to write it manually. You can select this formula and by pressing Control Key, you can drag this formula to the next below cell and it will automatically create formula for the next column. If you don't write $ sign with column name then above drag and drop formula will not work. So finally:<span style="text-decoration:underline;"> Table_array: address!$A$2:$B$4. </span></p>
<p>3) <strong>Col_index_num: </strong>This is the index number of the column from which it will search the value. In our case it is the address column of sheet2 and its index number is 2: <span style="text-decoration:underline;">Col_index_num:2</span></p>
<p>4) <strong>Range_lookup: </strong>This is a boolean value either TRUE or FALSE. If we select TRUE then it will do like search. If any one of the value matches or looks like the value searched for then it will fetch that data. However, if you select FALSE then it will do exact match before selecting the data. <span style="text-decoration:underline;">Range_looup: FALSE</span></p>
<p><strong>Step3</strong></p>
<p>In this step, we will create the same formula for rest of the rows for 3rd row and 4th row. To do that just select the First cell where we wrote our formula that is in C2 and drag it to the C3 cell by pressing control key. It will automatically generate the formula for C3. Similarly you can select the C2 and drag it to up to C4 and it will generate the formula both for C3 and C4. Also you will see the correct address displayed on the selected cells.</p>
<p><strong><a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/5.jpg"><img class="alignnone size-full wp-image-444" title="5" src="{{ site.baseurl }}/assets/2011/08/5.jpg" alt="" width="450" height="113" /></a></strong></p>
<p><strong><a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/6.jpg"><img class="alignnone size-full wp-image-443" title="6" src="{{ site.baseurl }}/assets/2011/08/6.jpg" alt="" width="233" height="131" /></a></strong></p>
<p><strong>Conclusion</strong></p>
<p>This is the complete explanation how one should write the VLOOKUP formula. I hope you enjoyed it, give me your feedbacks and let me know if you know something better or you wanna suggest something. I am the fledgling guy in Excel world  :) Please download the Excel sheet that I discussed now from this link <a href="http://rupeshtiwari.com/wp-content/uploads/2011/08/vlookup.xlsx">Example Excel Sheet VLOOKUP</a>.		</p>
