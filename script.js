function verif() {
    ch=document.getElementById(name).value;
    pswd1=document.getElementById(pswd1).value;
    pswd2=document.getElementById(pswd2).value;
    i=0;
    while (i<=ch.length() && "A"<=ch.charAt(i).toUpperCase()<="Z") {
        i++;
    }
    if (i!=ch.length()) {
        alert("invalid name")
        return false;
    }
    if (pswd1!=pswd2) {
        alert("ivalid password")
        return false;
    }
}