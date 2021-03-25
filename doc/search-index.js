var searchIndex = JSON.parse('{\
"config":{"doc":"","i":[[3,"Config","config","",null,null],[3,"NetworkConfig","","",null,null],[4,"Network","","",null,null],[13,"Mainnet","","",0,null],[13,"Testnet","","",0,null],[13,"Regtest","","",0,null],[11,"mainnet","","",1,[[],["networkconfig",3]]],[11,"testnet","","",1,[[],["networkconfig",3]]],[11,"regtest","","",1,[[],["networkconfig",3]]],[11,"mainnet","","",0,[[],["network",4]]],[11,"testnet","","",0,[[],["network",4]]],[11,"regtest","","",0,[[],["network",4]]],[11,"mainnet","","",2,[[],["config",3]]],[11,"magic","","",2,[[]]],[11,"get_protocol_version","","",2,[[]]],[11,"set_protocol_version","","",2,[[]]],[11,"get_services","","",2,[[]]],[11,"get_max_msg_size","","",2,[[]]],[11,"max_core_peers","","",2,[[]]],[11,"max_warp_peers","","",2,[[]]],[11,"max_peers","","",2,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]]],"p":[[4,"Network"],[3,"NetworkConfig"],[3,"Config"]]},\
"main":{"doc":"","i":[[5,"main","main","",null,[[],[["box",3],["result",4]]]]],"p":[]},\
"networking":{"doc":"This Library provides","i":[[3,"BitcoinCodec","networking","A Codec converting a raw TcpStream into a Sink + Stream of…",null,null],[3,"Peer","","A `tower::Service` representing an individual peer.",null,null],[3,"MessageHeader","","A Bitcoin Wire Protocol Message Header.",null,null],[4,"Command","","A shorthand way of referring to a type of Message. A…",null,null],[13,"Version","","",0,null],[13,"Verack","","",0,null],[13,"GetBlocks","","",0,null],[13,"GetData","","",0,null],[13,"Block","","",0,null],[13,"GetHeaders","","",0,null],[13,"Headers","","",0,null],[13,"Inv","","",0,null],[13,"MemPool","","",0,null],[13,"MerkleBlock","","",0,null],[13,"CmpctBlock","","",0,null],[13,"GetBlockTxn","","",0,null],[13,"BlockTxn","","",0,null],[13,"SendCmpct","","",0,null],[13,"NotFound","","",0,null],[13,"Tx","","",0,null],[13,"Addr","","",0,null],[13,"Alert","","",0,null],[13,"FeeFilter","","",0,null],[13,"FilterAdd","","",0,null],[13,"FilterClear","","",0,null],[13,"FilterLoad","","",0,null],[13,"GetAddr","","",0,null],[13,"Ping","","",0,null],[13,"Pong","","",0,null],[13,"Reject","","",0,null],[13,"SendHeaders","","",0,null],[4,"Message","","An enumeration of all Bitcoin Wire Protocol messages,…",null,null],[13,"Addr","","",1,null],[12,"addrs","networking::Message","",2,null],[13,"BlockTxn","networking","",1,null],[12,"block_hash","networking::Message","",3,null],[12,"txs","","",3,null],[13,"Block","networking","",1,null],[12,"block_header","networking::Message","",4,null],[12,"transactions","","",4,null],[13,"CompactBlock","networking","",1,null],[12,"header","networking::Message","",5,null],[12,"nonce","","",5,null],[12,"short_ids","","",5,null],[12,"prefilled_txns","","",5,null],[13,"FeeFilter","networking","",1,null],[12,"feerate","networking::Message","",6,null],[13,"FilterAdd","networking","",1,null],[12,"elements","networking::Message","",7,null],[13,"FilterClear","networking","",1,null],[13,"FilterLoad","","",1,null],[12,"filter","networking::Message","",8,null],[12,"n_hash_funcs","","",8,null],[12,"n_tweak","","",8,null],[12,"n_flags","","",8,null],[13,"GetAddr","networking","",1,null],[13,"GetBlockTxn","","",1,null],[12,"block_hash","networking::Message","",9,null],[12,"indexes","","",9,null],[13,"GetBlocks","networking","",1,null],[12,"protocol_version","networking::Message","",10,null],[12,"block_header_hashes","","",10,null],[12,"stop_hash","","",10,null],[13,"GetData","networking","",1,null],[12,"inventory","networking::Message","",11,null],[13,"GetHeaders","networking","",1,null],[12,"protocol_version","networking::Message","",12,null],[12,"block_header_hashes","","",12,null],[12,"stop_hash","","",12,null],[13,"Headers","networking","",1,null],[12,"headers","networking::Message","",13,null],[13,"Inv","networking","",1,null],[12,"inventory","networking::Message","",14,null],[13,"MemPool","networking","",1,null],[13,"MerkleBlock","","",1,null],[12,"block_header","networking::Message","",15,null],[12,"transaction_count","","",15,null],[12,"hashes","","",15,null],[12,"flags","","",15,null],[13,"NotFound","networking","",1,null],[12,"inventory_data","networking::Message","",16,null],[13,"Ping","networking","",1,null],[12,"nonce","networking::Message","",17,null],[13,"Pong","networking","",1,null],[12,"nonce","networking::Message","",18,null],[13,"Reject","networking","",1,null],[12,"message","networking::Message","",19,null],[12,"code","","",19,null],[12,"reason","","",19,null],[12,"extra_data","","",19,null],[13,"SendCompact","networking","",1,null],[12,"announce","networking::Message","",20,null],[12,"version","","",20,null],[13,"SendHeaders","networking","",1,null],[13,"Tx","","",1,null],[12,"transaction","networking::Message","",21,null],[13,"Verack","networking","",1,null],[13,"Version","","",1,null],[12,"protocol_version","networking::Message","",22,null],[12,"services","","",22,null],[12,"timestamp","","",22,null],[12,"receiver_services","","",22,null],[12,"receiver","","",22,null],[12,"transmitter_services","","",22,null],[12,"transmitter_ip","","",22,null],[12,"nonce","","",22,null],[12,"user_agent","","",22,null],[12,"best_block","","",22,null],[12,"relay","","",22,null],[4,"PeerError","networking","An enumeration of errors that a Peer connection can…",null,null],[13,"Timeout","","",23,null],[13,"Io","","",23,null],[13,"Deserialzation","","",23,null],[13,"Message","","",23,null],[13,"Malicious","","",23,null],[13,"Unexpected","","",23,null],[13,"ConnectionClosed","","",23,null],[4,"NetworkRequest","","NetworkRequest provides the inbound interface to the high…",null,null],[13,"Peers","","Requests peer information",24,null],[13,"BlocksByHash","","Requests all blocks with provided hashes",24,null],[13,"TransactionsByHash","","Requests all transactions with provided hashes",24,null],[13,"Headers","","Requests headers starting with the first header in the…",24,null],[12,"last_known_headers","networking::NetworkRequest","",25,null],[12,"max_responses","","",25,null],[13,"PushTransaction","networking","Pushes a transaction to the network using unsolicited Tx…",24,null],[13,"AdvertiseTransactions","","Advertises to peers that each transaction is available…",24,null],[13,"AdvertiseBlock","","Advertises to peers that a block is available using an inv…",24,null],[13,"Mempool","","Request a peer\'s view of the mempool. By default, the…",24,null],[4,"NetworkResponse","","NetworkResponse provides the possible responses of the…",null,null],[13,"Peers","","",26,null],[13,"Success","","Success announces that the request completed succesfully…",26,null],[13,"Blocks","","A list of blocks",26,null],[13,"Headers","","A list of Headers",26,null],[13,"Transactions","","A list of Transactions",26,null],[11,"bytes","","",0,[[]]],[11,"version","","",1,[[["config",3],["socketaddr",4]],["message",4]]],[11,"command","","",1,[[],["command",4]]],[11,"new","","",27,[[],["codec",3]]],[11,"at_address","","",28,[[["arc",3],["socketaddr",4],["config",3]]]],[11,"from_connection","","",28,[[["tcpstream",3],["arc",3],["config",3]]]],[11,"send","","",28,[[["message",4]]]],[11,"get_ip_address","","",28,[[],["socketaddr",4]]],[11,"get_daemon_address","","",28,[[],["socketaddr",4]]],[11,"get_best_block","","",28,[[]]],[11,"receive","","",28,[[["option",4],["duration",3]]]],[11,"receive_expected","","",28,[[["command",4],["option",4],["duration",3]]]],[11,"perform_handshake","","",28,[[["option",4]]]],[11,"accept_handshake","","",28,[[["option",4]]]],[11,"create_version_msg","","",28,[[["option",4]],["message",4]]],[11,"deserialize","","",29,[[],[["messageheader",3],["result",4],["deserializationerror",4]]]],[11,"get_command","","",29,[[],["command",4]]],[11,"get_payload_size","","",29,[[]]],[11,"len","","",29,[[]]],[11,"from","","",27,[[]]],[11,"into","","",27,[[]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","","",28,[[]]],[11,"into","","",28,[[]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","","",29,[[]]],[11,"into","","",29,[[]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_string","","",23,[[],["string",3]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"from","","",26,[[]]],[11,"into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"from","","",23,[[["deserializationerror",4]],["peererror",4]]],[11,"from","","",23,[[["elapsed",3]],["peererror",4]]],[11,"from","","",23,[[["error",3]],["peererror",4]]],[11,"clone","","",0,[[],["command",4]]],[11,"eq","","",0,[[["command",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",27,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",28,[[["formatter",3]],["result",6]]],[11,"fmt","","",29,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],[["error",3],["result",4]]]],[11,"serialize","","",0,[[],[["result",4],["error",3]]]],[11,"serialize","","",1,[[],[["result",4],["error",3]]]],[11,"deserialize","","",0,[[],[["result",4],["command",4],["deserializationerror",4]]]],[11,"deserialize","","",29,[[],[["result",4],["deserializationerror",4]]]],[11,"decode","","",27,[[["bytesmut",3]],[["result",4],["option",4]]]],[11,"encode","","",27,[[["bytesmut",3],["message",4]],["result",4]]]],"p":[[4,"Command"],[4,"Message"],[13,"Addr"],[13,"BlockTxn"],[13,"Block"],[13,"CompactBlock"],[13,"FeeFilter"],[13,"FilterAdd"],[13,"FilterLoad"],[13,"GetBlockTxn"],[13,"GetBlocks"],[13,"GetData"],[13,"GetHeaders"],[13,"Headers"],[13,"Inv"],[13,"MerkleBlock"],[13,"NotFound"],[13,"Ping"],[13,"Pong"],[13,"Reject"],[13,"SendCompact"],[13,"Tx"],[13,"Version"],[4,"PeerError"],[4,"NetworkRequest"],[13,"Headers"],[4,"NetworkResponse"],[3,"BitcoinCodec"],[3,"Peer"],[3,"MessageHeader"]]},\
"serde_derive":{"doc":"","i":[[24,"Deserializable","serde_derive","",null,null],[24,"Serializable","","",null,null]],"p":[]},\
"shared":{"doc":"","i":[[3,"CompactInt","shared","",null,null],[3,"u256","","",null,null],[3,"EncapsulatedAddr","","",null,null],[3,"InventoryData","","",null,null],[12,"inventory_type","","",0,null],[12,"hash","","",0,null],[3,"Block","","",null,null],[3,"BlockHeader","","",null,null],[3,"Nbits","","",null,null],[3,"CoinbaseInput","","",null,null],[3,"Transaction","","",null,null],[3,"TxInput","","",null,null],[3,"TxOutpoint","","",null,null],[3,"TxOutput","","",null,null],[4,"DeserializationError","","",null,null],[13,"Io","","",1,null],[13,"Parse","","",1,null],[4,"InventoryType","","",null,null],[13,"Tx","","",2,null],[13,"Block","","",2,null],[13,"FilteredBlock","","",2,null],[13,"CompactBlock","","",2,null],[13,"WitnessTx","","",2,null],[13,"WitnessBlock","","",2,null],[13,"FilteredWitnessBlock","","",2,null],[11,"parse","","",1,[[],["deserializationerror",4]]],[11,"new","","",3,[[],["compactint",3]]],[11,"from","","",3,[[],["compactint",3]]],[11,"value","","",3,[[]]],[11,"size","","",3,[[]]],[11,"new","","",4,[[],["u256",3]]],[11,"from","","",4,[[],["u256",3]]],[11,"from_bytes_be","","",4,[[],[["result",4],["u256",3],["deserializationerror",4]]]],[11,"deserialize_be","","",4,[[],[["result",4],["u256",3],["deserializationerror",4]]]],[11,"from_hex","","",4,[[],["u256",3]]],[11,"to_hex","","",4,[[],["string",3]]],[11,"new","","",5,[[["socketaddr",4]],["encapsulatedaddr",3]]],[11,"from","","",0,[[["inventorytype",4],["u256",3]],["inventorydata",3]]],[11,"len","","",0,[[]]],[11,"new","","",6,[[["transaction",3],["vec",3],["blockheader",3]],["block",3]]],[11,"len","","",7,[[]]],[11,"new","","",7,[[["nbits",3],["u256",3]],["blockheader",3]]],[11,"hash","","",7,[[],["u256",3]]],[11,"new","","",8,[[["u256",3]],["nbits",3]]],[11,"len","","",9,[[]]],[11,"new","","",9,[[["vec",3],["txinput",3],["txoutput",3],["vec",3]],["transaction",3]]],[11,"len","","",10,[[]]],[11,"new","","",10,[[["vec",3],["txoutpoint",3]],["txinput",3]]],[11,"len","","",11,[[]]],[11,"new","","",11,[[["vec",3]],["txoutput",3]]],[11,"len","","",12,[[]]],[11,"new","","",12,[[["u256",3]],["txoutpoint",3]]],[8,"Serializable","","",null,null],[10,"serialize","","",13,[[],[["result",4],["error",3]]]],[8,"Deserializable","","",null,null],[10,"deserialize","","",14,[[],[["result",4],["deserializationerror",4]]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"serialize","","",3,[[],[["result",4],["error",3]]]],[11,"serialize","","",4,[[],[["result",4],["error",3]]]],[11,"serialize","","",5,[[],[["result",4],["error",3]]]],[11,"serialize","","",2,[[],[["result",4],["error",3]]]],[11,"serialize","","",0,[[],[["result",4],["error",3]]]],[11,"serialize","","",6,[[],[["result",4],["error",3]]]],[11,"serialize","","",7,[[],[["result",4],["error",3]]]],[11,"serialize","","",8,[[],[["result",4],["error",3]]]],[11,"serialize","","",9,[[],[["result",4],["error",3]]]],[11,"serialize","","",10,[[],[["result",4],["error",3]]]],[11,"serialize","","",11,[[],[["result",4],["error",3]]]],[11,"serialize","","",12,[[],[["result",4],["error",3]]]],[11,"serialize","","",15,[[],[["result",4],["error",3]]]],[11,"deserialize","","",3,[[],[["compactint",3],["deserializationerror",4],["result",4]]]],[11,"deserialize","","",4,[[],[["result",4],["u256",3],["deserializationerror",4]]]],[11,"deserialize","","",5,[[],[["deserializationerror",4],["result",4]]]],[11,"deserialize","","",2,[[],[["deserializationerror",4],["result",4]]]],[11,"deserialize","","",0,[[],[["deserializationerror",4],["result",4]]]],[11,"deserialize","","",7,[[],[["result",4],["deserializationerror",4]]]],[11,"deserialize","","",8,[[],[["deserializationerror",4],["nbits",3],["result",4]]]],[11,"deserialize","","",9,[[],[["result",4],["deserializationerror",4]]]],[11,"deserialize","","",10,[[],[["result",4],["deserializationerror",4]]]],[11,"deserialize","","",11,[[],[["result",4],["deserializationerror",4]]]],[11,"deserialize","","",12,[[],[["result",4],["deserializationerror",4]]]],[11,"deserialize","","",15,[[],[["result",4],["deserializationerror",4]]]],[11,"from","","",1,[[["error",3]],["deserializationerror",4]]],[11,"clone","","",2,[[],["inventorytype",4]]],[11,"eq","","",4,[[]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"hash","","",4,[[]]],[11,"source","","",1,[[],[["option",4],["error",8]]]]],"p":[[3,"InventoryData"],[4,"DeserializationError"],[4,"InventoryType"],[3,"CompactInt"],[3,"u256"],[3,"EncapsulatedAddr"],[3,"Block"],[3,"BlockHeader"],[3,"Nbits"],[3,"Transaction"],[3,"TxInput"],[3,"TxOutput"],[3,"TxOutpoint"],[8,"Serializable"],[8,"Deserializable"],[3,"CoinbaseInput"]]},\
"warp_crypto":{"doc":"","i":[[5,"double_sha256","warp_crypto","",null,[[["vec",3]]]],[5,"sha256d","","",null,[[]]]],"p":[]},\
"warpd":{"doc":"Update 2021-03-25 - Moved to Zebra BTCAs of March 2021, …","i":[[5,"run_shell","warpd","",null,[[]]],[3,"Warpd","","The Bitcoin Warp Daemon",null,null],[12,"config","","",0,null],[3,"ConnectionManager","","An initial pass at a connection manager. Soon to be …",null,null],[11,"new","","",1,[[],["connectionmanager",3]]],[11,"add","","",1,[[["config",3],["socketaddr",4]]]],[11,"accept","","",1,[[["config",3]]]],[11,"num_peers","","",1,[[]]],[11,"new","","",0,[[],["warpd",3]]],[11,"add_peer","","",0,[[["socketaddr",4]]]],[11,"accept_peer","","",0,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]]],"p":[[3,"Warpd"],[3,"ConnectionManager"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);