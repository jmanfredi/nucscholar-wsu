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

	document.write(papers.length);

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
			if(parsed[i].authors.toLowerCase().includes(author.toLowerCase()))
			{
				papers.push(parsed[i].doi);
			}
			else
			{
				continue;
			}
		}
		catch
		{
			console.log("No Author for Object " + i);
			continue;
		}
	}
	return papers;
}