function main()
{
	let reader = new FileReader();
	var author = document.getElementById("author").value;
	var title = document.getElementById("title").value;
	var subject = document.getElementById("subject").value;
	var journal = document.getElementById("journal").value;
	var keywords = document.getElementById("keywords").value;
	var doi = document.getElementById("doi").value;
	reader.readAsText("./NSRcomplete.json")

	document.write("Author = " + author + " Title = " + title + " Subject = " + subject + " Journal = " + journal + " Keywords = " + keywords + " DOI = " + doi);
	
}