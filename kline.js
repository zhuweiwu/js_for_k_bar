function loadData()
{
    let barperiod = 1;//period based on second

    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
        // you can use this method to get file and perform respective operations
                let files =   Array.from(input.files);
                let file = files[0];
                console.log(file.name);
                let reader = new FileReader();

                reader.readAsText(file);

                reader.onload = function() {
                  let tickdata = reader.result;
                  let bars = buildBar(tickdata, barperiod);
                };
              
                reader.onerror = function() {
                  console.log(reader.error);
                };
            };
    input.click();
}


function buildBar(tickdata, barperiod)
{
    let bars = [];
    if(tickdata.length == 0)
    {
        return bars;
    }

    let length = tickdata.length;
    let isfirst = true;
    for(var i=0; i<length; i++)
    {
        
    }
    

}
