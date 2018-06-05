var xml='<?xml version="1.0"?>\
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

var xmlDoc;

function crea()
{
    xml=xml.replace(/>\s*/g,'>')
    xml=xml.replace(/\s*</g,'<')
    localStorage.setItem("libri_xml",xml);
    alert("Dati salvati correttamente");
}

function leggi()
{
    xml=localStorage.getItem("libri_xml");
    var parser=new DOMParser();
    xmlDoc=parser.parseFromString(xml,"text/xml");
    var root=xmlDoc.documentElement;
    var nLibri=root.childNodes.length;
    alert("Libri letti: "+ nLibri);
}

function visualizza()
{
    var root=xmlDoc.documentElement;//puntatore a radice
    var tbody=document.getElementById("tabLibri");
    for(var i=0;i<root.childNodes.length;i++)
    {
        var book=root.childNodes[i];//evito di creare una variabile intermedia
        var tr=document.createElement("tr");
        tbody.appendChild(tr);
        var titolo;
        var autori="";
        var anno;
        var prezzo;
        var lingua,categoria;
        if(book.hasAttribute("category"))
            categoria=book.getAttribute("category")
        for(var j=0;j<book.childNodes.length;j++)
        {
            var nodeName=book.childNodes[j].nodeName;
            switch (nodeName)
            {
                case "title":
                    titolo=book.childNodes[j].textContent;
                    if(book.childNodes[j].hasAttribute("lang"))
                        lingua=book.childNodes[j].getAttribute("lang")
                    break;
                case "author":
                    autori +=book.childNodes[j].textContent+" -- ";
                    break;
                case "year":
                    anno=book.childNodes[j].textContent;
                    break;
                case "price":
                    prezzo=book.childNodes[j].textContent;
                    break;
            }
        }
        autori=autori.substring(0,autori.length-5);

        var td=document.createElement("td")
        td.innerHTML=titolo;
        tr.appendChild(td);

        var td=document.createElement("td")
        td.innerHTML=categoria;
        tr.appendChild(td);

        var td=document.createElement("td")
        td.innerHTML=lingua;
        tr.appendChild(td);

        var td=document.createElement("td")
        td.innerHTML=autori;
        tr.appendChild(td);

        var td=document.createElement("td")
        td.innerHTML=anno;
        tr.appendChild(td);

        var td=document.createElement("td")
        td.innerHTML=prezzo;
        tr.appendChild(td);

    } //fine ciclo for creazione delle righe
}

/*var table=document.getElementById("tabLibri");

 for(var i=0;i<root.childNodes.length;i++)
 {
 var td;
 var div;
 var book=root.childNodes;
 var foglie=book[i].childNodes;
 var tr=document.createElement("tr");
 table.appendChild(tr);
 var vecchio="";
 for(var j=0;j<foglie.length;j++)
 {
 if(j!=0)
 {
 if(vecchio==foglie[j].nodeName)
 {
 div.innerHTML=div.innerHTML+", "+foglie[j].textContent;
 }
 else
 {
 vecchio=foglie[j].nodeName;
 td=document.createElement("td");
 tr.appendChild(td);
 div=document.createElement("div");
 td.appendChild(div);
 div.innerHTML=foglie[j].textContent;
 }
 }
 else
 {
 vecchio=foglie[j].nodeName;
 td=document.createElement("td");
 tr.appendChild(td);
 div=document.createElement("div");
 td.appendChild(div);
 div.innerHTML=foglie[j].textContent;
 var categoria=book[i].getAttribute("category");
 td=document.createElement("td");
 tr.appendChild(td);
 div=document.createElement("div");
 td.appendChild(div);
 div.innerHTML=categoria;
 var lingua=foglie[j].getAttribute("lang");
 td=document.createElement("td");
 tr.appendChild(td);
 div=document.createElement("div");
 td.appendChild(div);
 div.innerHTML=lingua;
 }
 }
 }*/