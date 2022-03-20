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
		document.write(papers[0].doi);
	}
	catch
	{
		document.write("No DOI # was found corresponding to your inputs")
	}

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