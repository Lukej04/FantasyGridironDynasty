//https://www.bpwebs.com/pull-data-from-google-sheets-to-html-table/

function doGet() {
  return HtmlService.createTemplateFromFile('Index2').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1etClaePcBj2_UIUczetXpc4hgu2i0jxUE0ci-Tr3wMk"; //CHANGE
  var dataRange     = "Teams!A2:J29"; //CHANGE
 
  var range   = Sheets.Spreadsheets.Values.get(spreadSheetId,dataRange);
  var values  = range.values;
 
  return values;
}
 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
