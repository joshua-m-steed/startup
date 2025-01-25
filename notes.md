# CS 260 Notes

### Git Notes
__Helpful Command Line Prompts:__   
-> `git fetch`  
Retrieves changes and updates from GitHub  
-> `git status`  
Provides a list of modified files not yet committed  
-> `git add`  
Adds file(s) for staging and committing  
-> `git commit -m "helpful message"`  
Commits the file with descriptive message of the committed changes    
-> `git log`  
Useful for seeing progress and history  
-> `git checkout "id"`  
Useful for visiting different versions  
NOTE: The Branch is defaulted to "Main"  
-> `git diff HEAD HEAD~1`  
Useful for comparisons  
NOTE: `~#` is the distance from `HEAD`  
-> `git config --global user."name/email" "___"`  
Declares who is commiting to the code  

### Markdown Notes  
-> `#`, `##`,`###`  
Headers  
-> `*`/`_`, `**`/`__`,`~~`,`***`,`**`+`_`  
Each alter text as *italics*, **bold**, ~~strikethrough~~, and more  
-> `<sub>`/`</sub>`,`<sup>`/`</sup>`,`<ins>`/`</ins>`  
Each alter text as <sub>subscripts</sub>, <sup>superscripts</sup>, and <ins>underlines</ins>  
-> `[display text](link)`  
Provides a [hyperlink](https://www.youtube.com/watch?v=dQw4w9WgXcQ)  

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS Notes

**Server IP** :: `54.156.31.145`  
**Domain** :: `http//minijosh.click` / `https://minijosh.click/`
- `http//[subdomain|.minijosh.click` also works  

`[subdomain].[secondary].[top]`  

**Console Commands**  
-> `cd`  
Change Directory. `cd ..` moves back a directory. `TAB` reveals potential directories  
-> `mkdir` / `rmdir`  
Make / Remove directory  
-> `rm` / `mv` / `cp`  
Remove, Move, and Copy files  
-> `ls`  
List files within a directory  
-> `find`  
Find file(s)  
-> `cat`  
Output contents of a file  
-> `kill` / `CTRL-C`
Kill the current running program  
-> `sudo`  
Execute a command as an admin  
-> `ssh`  
Create a secure shell on a remote device  
-> `scp`  
Securely copy files to a remote computer  
-> `history` / `CTRL-R`
Show the history of recently used commands  
-> `ping`  
Check if a website is up and running  
-> `dig`  
Show the DNS information for the domain you searched  
-> `man`  
Look up the commands in the manual  

**Server Commands**  
Connect :: `ssh -i [key] ubuntu@[server-ip]`  
Privatize Key :: `chmod  600 [key pair file]`  
Find IP :: `dig [domain]`  
Who Owns :: `whois [domain]`  
Server Directory :: `ls -l`  
Disconnect :: `exit`  

**Caddy Commands**  
Caddy Configuration :: `vi Caddyfile`  
Save Caddy File :: `:wq`  
Super Caddy Restart :: `sudo service caddy restart`  

*Other Server Notes*  
Server Version - `t2.micro`    
- If current package is slow/low memory, use `t3.nano`  
- Access server [here](https://aws.amazon.com/)
Elastic IP - Free while running server. Costs while server is deactivated.  
Security Package - ssh, HTTP, HTTPS  
Alerts - Zero-Budget  

## HTML Notes

- HTML is text-like and works with `elements` and `tags`. `Tags` include the use of `<`,`>`, and `/`.  
- Attributes are used to describe details and content within tags.  
Example :: `<p id="hello" class="greeting">HelloWorld</p>`  
- Hyperlinks use an anchor tag, `<a>`, with an `href` attribute. This embeds the link within text provided.  
Example :: `<a href="https://minijosh.click">Visit my site here</a>`  
- Comments work like normal forms of code, but the syntax are as follows:  
`<!-- This isn't read -->`  


**HTML Tags :: Divided into Groups**  
`<html>` Opens the file and reads as HTML `</html>`  

`<body>` The content body of the page `</body>`  
`<header>` Header of the content body `</header>`  
`<main>` Main of the content body `</main>`  
`<footer>` Footer of the content body `</footer>`  

`<title>` Changes the title of the tab `</title>`  
`<head>` Provides header information `</head>`  
`<div>` Block division of content `</div>`  
`<nav>` Navigational inputs `</nav>`  
`<span>` Inline span of content `</span>`  

`<p>` Paragraph of text `</p>`  
`<b>` Bring attention `</b>`  
`<h#>` # is 1-9, provides a text heading `</h#>`  

`<table>` Starts the creation of a table `</table>`  
`<tr>` Table Row `</tr>`  
`<th>` Header for the table `</th>` 
`<td>` Data for the table `</td>`  

`<ol>` / `<ul>` Ordered / Unordered list `</ol>` / `</ul>`  
`<li>` Creates a list `</li>`  

`<a>` An anchor for a hyperlink `</a>` 
 - Uses `href=""` to access the hyperlink.  
`<img>` Image reference `</img>`
 - Uses `src=""` to access the image address.
 - Uses `alt=""` to display alternate text when the image fails to load. Also describes the image.
 - Use `width=""` or `height=""` to change the size of the image.  
`<audio>` Audio content `</audio>`  
`<video>` Video content `</video>`

**HTML Inputs**  
`<form>` Input container and submission `</form>`  
Example :: `<form action"form.html" method="post">`  
`<fieldset>` Labeled input grouping `</fieldset>`  
Example :: `<fieldset> ... </fieldset>`  
`<input>` Multiple types of user inputs `</input>`  
Example :: `<input type="" />`  
`<select>` Selection Dropdown Menu `</select>`  
Example :: `<select><option>1</option></select>`  
`<optgroup>` Grouped selection dropdown `</optgroup>`  
Example :: `<optgroup><option>1</option></optgroup>`  
`<option>` Selected options `</option>`  
Example :: `<option selected>option2</option>`  
`<textarea>` Multiline text inputs `</textarea>`  
`<label>` Individual input label `</label>`  
Example :: `<label for="range">Range: </label>`  
`<output>` Output of the input `</output>`  
Example :: `<output for="range">0</output>`  
`<meter>` Display the values with a known range `</meter>`  
Example :: `<meter min="0" max="100" value="50"></meter>`  

**Input Types**  
 - Text, single line textual value
 - Password, obscured
 - Email, address
 - Tel, phone number
 - Url, site address
 - Number, numerical value
 - Checkbox, inclusive selection
 - Radio, exclusive selection
 - Range, range limited number
 - Date, year, month, day
   - Datetime-local, day and time
   - Month, year and month
   - Week, week of the year
 - Color
 - File, local files
 - Submit, a button to trigger the submission

Example of implications :: `<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />`  

*Common Attributes Among Input Types*  
 - Name :: Name of the input, also used as the name when submitted
 - Disabled :: Disables ability for the users to interact
 - Value :: The initialized value
 - Required :: Signifies that a vlalue is required to be valid  
