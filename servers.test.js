describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo if input is empty', function(){
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);

  })

  it('should update #server table in updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let tdList = document.querySelectorAll('#severTable tbody tr td');

    expect(tdList.length).toEqual(3);
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00');
    expect(tdList[2].innerText).toEqual('X');
  })

  afterEach(function() {
    serverTbody.innerHTML = "";
    allServers = {};
    serverID = 0;
    
  });
});
