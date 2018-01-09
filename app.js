$(() => {

	fillProjects(projects)

	$('.scroll').click((event) => {
		var hash = event.target.hash
		if(hash) {
			event.preventDefault()
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400)
		}
	})
})


let projects = [
	{
		"img": "painter-palette",
		"title": "Blitz SMS - Text message portal to the Internet",
		"desc": "It is an Android App in Development for a school assignment. Blitz SMS will allow users to browse the web, without using their data plan. It uses SMS to communicate with our server, and our server will perform web scrapping in order to give the user the information that they want. We will be supporting searches, web pages, news feeds, and maps. There are other features and plans for the future development after the final project deliverable.",
		"tech": ["Android Studion", "Nodejs Server"],
		"link": "https://github.com/ershany/red-crow"
	},
	{
		"img": "painter-palette",
		"title": "8-bit Breadboard CPU",
		"desc": "I wanted to learn how computers actually worked from simple logic gates all the way up to source code.",
		"tech": ["Ben Eater - Youtube &amp; Eater.net", "The Elements of Computing Systems - Nisan &amp; Schocken"],
		"link": "#"
	},
	{
		"img": "painter-palette",
		"title": "Straw Poll",
		"desc": "Strawpoll is a site where users have the ability to create instant, real-time polls. The site lets anyone create a poll with a question and multiple options. The creator of the poll then can copy the url and share with their friends and watch the votes roll in. The results page shows the list of options ranked by number of votes with a bar showing the percents each has received.",
		"tech": ["PHP", "HTML", "CSS3", "Javascript", "MySQL"],
		"link": "https://github.com/mic-max/strawpoll"
	}
]

function fillProjects(json) {
	let list = document.getElementById('projects-list')
	for(let proj of projects) {
		let li = document.createElement('li')
		let img = document.createElement('img')
		let h3 = document.createElement('h3')
		let p = document.createElement('p')
		let h4 = document.createElement('h4')
		let ul = document.createElement('ul')
		let a = document.createElement('a')
		let span = document.createElement('span')

		img.src = `img/${proj.img}.png`
		img.width = '20'

		h3.innerHTML = proj.title
		p.innerHTML = proj.desc
		h4.innerHTML = "Resources Used:"

		a.target = '_blank'
		a.href = proj.link

		span.classList.add('hvr-fade')
		span.innerHTML = 'Check it out'
		a.appendChild(span)


		for(let tech of proj.tech) {
			let li = document.createElement('li')
			li.innerHTML = tech
			ul.appendChild(li)
		}
		li.classList.add('no-style')

		li.appendChild(img)
		li.appendChild(h3)
		li.appendChild(p)
		li.appendChild(h4)
		li.appendChild(ul)
		li.appendChild(a)
		list.appendChild(li)
	}
}