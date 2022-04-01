async function main()
{
	var author = document.getElementById("author").value;
	var title = document.getElementById("title").value;
	var subject = document.getElementById("subject").value;
	var journal = document.getElementById("journal").value;
	var keywords = document.getElementById("keywords").value;
	var doi = document.getElementById("doi").value;

	var parsed;
	var url = 'https://raw.githubusercontent.com/popp22/popp22.github.io/main/test.json';

	parsed = await getJSON(url);

	var papers = search(parsed, author, title, subject, journal, keywords, doi);
	
	try
	{
		if(papers.length > 0)
		{
			sessionStorage.setItem("Papers", JSON.stringify(papers));
			location.href = "./output.html";
		}
		else
		{
			document.write("No DOI # was found corresponding to your inputs");
			document.write("<br>");
			submitFormat();
		}
	}
	catch
	{
		document.write("No DOI # was found corresponding to your inputs");
		submitFormat();
	}
	

}

function submitFormat()
{
	var b = document.createElement("button");
		b.innerHTML = "To search a new paper click this button!";
		b.onclick = function()
		{
			document.body.innerHTML = "";
			inputFields();
		};
		document.body.appendChild(b);
}

async function getJSON(url)
{
	const response = await fetch(url);
	return response.json();  
}

function search(parsed, author, title, subject, journal, keywords, doi)
{ 
	var papers = new Array();
	for(i = 0; i < Object.keys(parsed).length; i++)
	{
		try
		{
			
			//Check author
			if(!(chkAut(author, parsed[i].authors)))
			{
				continue;
			}
			//Check title
			if(!(chkTitle(title, parsed[i].title)))
			{
				continue;
			}
			//Check subject
			if(!(chkSub(subject, parsed[i].subject)))
			{
				continue;
			}
			//Check journal
			if(!(chkJournal(journal, parsed[i].journal)))
			{
				continue;
			}
			//check keywords
			if(!(chkKeywords(keywords, parsed[i].keywords)))
			{
				continue;
			}
			//check DOI
			if(!(chkDoi(doi, parsed[i].doi)))
			{
				continue;
			}
			console.log("Made it");
			papers.push(parsed[i]);

		}
		catch
		{
			console.log("Error");
			continue;
		}
	}
	return papers;
}

function chkAut(author, parsAuthor) 
{
	try
	{
		if(!(parsAuthor.toLowerCase().includes(author.toLowerCase())))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	catch
	{
		console.log("Author undefined");
		return false;
	}
}

function chkTitle(title, parsTitle) 
{
	try
	{
		if(!(parsTitle.toLowerCase().includes(title.toLowerCase())))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	catch
	{
		console.log("Title undefined");
		return false;
	}
}

function chkSub(subject, parsSub) 
{
	try
	{
		for(j = 0; j < parsSub.length; j++)
		{
			if(!(parsSub[j].toLowerCase().includes(subject.toLowerCase())))
			{
				continue;
			}
			else
			{
				return true;
			}
		}
		return false;
		
		
	}
	catch
	{
		console.log("Subject undefined");
		return false;
	}
}

function chkJournal(journal, parsJournal)
{
	try
	{
		if(!(parsJournal.toLowerCase().includes(journal.toLowerCase())))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	catch
	{
		console.log("journal undefined");
		return false;
	}
}
function chkKeywords(keywords, parsKeywords)
{
	try
	{
		for(j = 0; j < parsKeywords.length; j++)
		{
			if(!(parsKeywords[j].toLowerCase().includes(keywords.toLowerCase())))
			{
				continue;
			}
			else
			{
				return true;
			}
		}
		return false;
		
		
	}
	catch
	{
		console.log("keywords undefined");
		return false;
	}
}
function chkDoi(doi, parsDoi)
{
	try
	{
		if(!(parsDoi.toLowerCase().includes(doi.toLowerCase())))
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	catch
	{
		console.log("DOI undefined");
		return false;
	}
}
function createField(form,field)
{
	var labelOne = document.createElement("Label");
	labelOne.setAttribute("for",field.toLowerCase());
	labelOne.innerHTML = field + ": ";
	form.appendChild(labelOne);

	var inputOne = document.createElement("input");
	inputOne.setAttribute("type","text");
	inputOne.setAttribute("id",field.toLowerCase());
	inputOne.setAttribute("name",field.toLowerCase());
	form.appendChild(inputOne);
	var linebreak = document.createElement("br");
	form.appendChild(linebreak);
}

function inputFields()
{
	
	var script = document.createElement("script");
	script.setAttribute("src","script.js");
	var form = document.createElement("form");
	form.setAttribute("name","search");
	form.setAttribute("action","javascript:main()");
	createField(form,"Author");
	createField(form,"Title");
	createField(form,"Subject");
	createField(form,"Journal");
	createField(form,"Keywords");
	createField(form,"DOI");
    var submitButton = document.createElement("input");
	submitButton.setAttribute("type","submit");
	submitButton.setAttribute("value","Submit");
	form.appendChild(submitButton);
	document.body.appendChild(script);;
	document.body.appendChild(form);
}