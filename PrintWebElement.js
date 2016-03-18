function PrintWebElement(elementID) {
    var prtContent = document.getElementById(elementID); 
    /** for ASP.net, use the command below instead: */ 
    // var prtContent = document.getElementById(<%= eval('elementID.ClientID') %>);
    
    var newWindow = window.open('about:blank', '', 'letf=0,top=0,width=1,height=1,toolbar=0,scrollbars=0,status=0');
    newWindow.document.write('<html><head><title>Page Title</title>');
    /** optional: page styling */
    //newWindow.document.write('<style></style>');
    
    /** optional: link to style sheet */
    //newWindow.document.write('<link rel="stylesheet" type="text/css" href=""');
    newWindow.document.write('</head><body>');
    newWindow.document.write($.(prtContent).html()); // require jQuery library
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
    return true;
}
