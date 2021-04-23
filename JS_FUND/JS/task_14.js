/*
    14.	Write a JavaScript function to remove HTML/XML tags from string.
    Test Data:
    console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
    "PHP Exercises”
*/

function stripHtmlTags(myString)
{
    myString = myString.toString();
  return myString.replace(/<[^>]*>/g, '');
}

console.log(stripHtmlTags('<p><strong><em>PHP Exercises</em></strong></p>'));