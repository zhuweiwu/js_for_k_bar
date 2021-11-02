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
    let time;
    let ask;
    let bid;

    //process first tick
    let firstline = tickdata[0];

    let firststrs = tickdata[0].split(',');
        
    if(firststrs.length == 4)
    {
      time = new Date(firststrs[0] + " " + firststrs[1]);
      bid = Number(firststrs[2]);
      ask = Number(firststrs[3]);
    }
    else if(firststrs.length == 5)
    {
      time = new Date(firststrs[0] + " " + firststrs[1] + "." + firststrs[2]);
      bid = Number(firststrs[3]);
      ask = Number(firststrs[4]);
    }

    let firstTime = time.getDate()


    for(var i=0; i<length; i++)
    {
        let strs = tickdata[i].split(',');
        
        if(strs.length == 4)
        {
          time = new Date(strs[0] + " " + strs[1]);
          bid = Number(strs[2]);
          ask = Number(strs[3]);
        }
        else if(strs.length == 5)
        {
          time = new Date(strs[0] + " " + strs[1] + "." + strs[2]);
          bid = Number(strs[3]);
          ask = Number(strs[4]);
        }
        else
        {
          continue;
        }

    }
    
}

class Bar
{
  constructor()
  {

  }

  constructor(time, bid, ask)
  {
    this.bidOpen = bid;
    this.bidHigh = bid;
    this.bidLow = bid;
    this.bidClose = bid;
    this.askOpen = ask;
    this.askHigh = ask;
    this.askLow = ask;
    this.askClose = ask;
    this.time = time;
  }

  upate(bid, ask)
  {
    //update high
    this.askHigh = this.askHigh > ask ? askHigh : ask;
    this.bidHigh = this.bidHigh > bid ? bidHigh : bid;

    //update low 
    this.askLow = this.askLow < ask ? askLow : ask;
    this.bidLow = this.bidLow < bid ? bidLow : bid;

    //update close
    this.askClose = ask;
    this.bidClose = bid;
  }

  clone()
  {
    let newBar = new Bar();
    newBar.askOpen = bar.askOpen;
    newBar.askHigh = bar.askHigh;
    newBar.askLow = bar.askLow;
    newBar.askClose = bar.askClose;
    newBar.bidOpen = bar.bidOpen;
    newBar.bidHigh = bar.bidHigh;
    newBar.bidLow = bar.bidLow;
    newBar.bidClose = bar.bidClose;
    newBar.time = bar.time;
    return newBar;
  }
}
