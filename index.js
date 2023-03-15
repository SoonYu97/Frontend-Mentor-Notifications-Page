function readAll() {
	const unreadElements = document.getElementsByClassName("unread")
	Array.prototype.reduceRight.call(
		unreadElements,
		(_, unreadElement) => unreadElement.classList.remove("unread"),
		null
	)
  const unreadCountElements = document.getElementById("unread-count")
  unreadCountElements.innerHTML = '0'
}
