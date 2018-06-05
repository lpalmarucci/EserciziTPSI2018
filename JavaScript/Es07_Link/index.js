/**
 * Created by l.palmarucci.0117 on 07/03/2017.
 */
window.onload=function init() {
    var lst=document.getElementById("lstSiti")
    lst.selectedIndex=-1
}
function visualizza() {
    var lst=document.getElementById("lstSiti")
    open(lst.value, "_blanck") 
}