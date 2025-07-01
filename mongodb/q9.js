//Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020

// Follow these instructions to configure replica set:

// mongosh --port 27018

//rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})

//rs.config()  //to check the config
//rs.status()

//Use mongosh command with the following connection string and the primary server will automatically get connected:

//mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

//show dbs
//use mytestdb
//db.createCollection("customers")
// db.customers.insertOne({name:"John"})

// Check secondary servers. Check both the servers if data is replicated
// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now


//rs,initiate({_id:'cf,members:[{_id:0, host:'localhost:27018'},{_id:1,host:'localhost'}])
// rs.config()
// rs.status()
