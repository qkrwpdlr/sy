document.getElementById("form_submit").onsubmit = (e) => {
    const title = document.getElementsByName("title")[0]
    const content = document.getElementsByName("content")[0]
    const img = document.getElementsByName("img")[0]
    const typeCode = document.getElementsByName("type_code")[0]
    let isGood = true
    if (title.value.length === 0) {
        title.classList.add("err")
        isGood = false
    } else title.classList.remove("err")
    if (content.value.length === 0) {
        content.classList.add("err")
        isGood = false
    } else content.classList.remove("err")
    if (img.value.length === 0) {
        img.classList.add("err")
        isGood = false
    } else img.classList.remove("err")
    if (typeCode.value.length === 0) {
        typeCode.classList.add("err")
        isGood = false
    } else typeCode.classList.removeF("err")
    if (!isGood) alert("err")
    return isGood
}

