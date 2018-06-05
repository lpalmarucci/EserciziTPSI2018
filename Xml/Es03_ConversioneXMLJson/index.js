/*var xml='<?xml version="1.0"?>\
    <bookstore>\
        <book category="cooking">\
            <title lang="en">Everyday Italian</title>\
            <author>Giada De Laurentiis</author>\
            <year>2005</year>\
            <price>30.00</price>\
        </book>\
        <book category="children">\
            <title lang="en">Harry Potter</title>\
            <author>J K. Rowling</author>\
            <year>2005</year>\
            <price>29.99</price>\
        </book>\
        <book category="web">\
            <title lang="en">XQuery Kick Start</title>\
            <author>James McGovern</author>\
            <author>Per Bothner</author>\
            <author>Kurt Cagle</author>\
            <author>James Linn</author>\
            <author>Vaidyanathan Nagarajan</author>\
            <year>2003</year>\
            <price>49.99</price>\
        </book>\
        <book category="web" cover="paperback">\
            <title lang="en">Learning XML</title>\
            <author>Erik T. Ray</author>\
            <year>2003</year>\
            <price>39.95</price>\
        </book>\
    </bookstore>';
*/
var xmlDoc;
function crea() {
    var xml=localStorage.getItem("libri_xml")
    alert(xml)
    var parser=new DOMParser();
    xmlDoc=parser.parseFromString(xml,"text/xml")
    var root=xmlDoc.documentElement;
    var vetJson=new Array();
    for(var i=0;i<root.childNodes.length;i++)
    {
        var book=root.childNodes[i];
        var obj={};
        if(book.hasAttribute("category"))
            obj["category"]=book.getAttribute("category");
        for(var j=0;j<book.childNodes.length;j++)
        {
            if(!(book.childNodes[j].nodeName in obj))
            {
                if(book.childNodes[j].nodeName=="author")
                {
                    obj["author"]=[];
                    // .push accoda una nuova voce ad un vettore enumeartivo. non funziona per quelli associativi
                    obj["author"].push(book.childNodes[j].textContent)
                }
                else
                    obj[book.childNodes[j].nodeName] = book.childNodes[j].textContent;
            }
            else
                obj["author"].push(book.childNodes[j].textContent)
            if(book.childNodes[j].nodeName=="title" && book.childNodes[j].hasAttribute("lang"))
                obj["lang"]=book.childNodes[j].getAttribute("lang");


            /*switch(book.childNodes[j].nodeName)
            {
                case "title":
                    obj["title"]=book.childNodes[j].textContent;
                    if(book.childNodes[j].hasAttribute("lang"))
                        obj["lang"]=book.childNodes[j].textContent;
                    break;
                case "author":
                    obj["author"]=book.childNodes[j].textContent;
                    break;
                case "year":
                    obj["year"]=book.childNodes[j].textContent;
                    break;
                case "price":
                    obj["price"]=book.childNodes[j].textContent;
                    break;
            }*/
        }
        vetJson[i]=obj;
    }
    var s=JSON.stringify(vetJson)
    localStorage.setItem("bookstoreJSON",s)
    alert(s);
}