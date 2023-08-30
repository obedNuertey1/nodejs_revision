//DNS Module
/*
Node.js dns module is used to do actual DNS loopup as well as the use underlying operating system name resolution functionalities. This module provides an asynchronous network wrapper and can be imported using the following syntax.
let dns = require('dns');

Methods
 * dns.lookup(hostname[,options], callback) - Resolves a hostname (e.g. 'google.com') into the first found A (IPv4) or AAAA (IPv6) record. options can be an object or integer. If options is not provided, then IPv4 and v6 addresses are both valid. If options is an integer, then it must be 4 or 6.
 * dns.lookupService(address, port, callback) - Resolves the given address and port into a hostname and service using getnameinfo.
 * dns.resolve(hostname[,rrtype], callback) - Resolves a hostname (e.g. 'google.com') into an array of the record types specified by rrtype.
 * dns.resolve4(hostname, callback) - The same as dns.resolve(), but only for IPv4 queries (A records). addresses is an array of IPv4 addresses (e.g. ['74.125.79.104', '74.125.79.105', '74.125.79.106']).
 * dns.resolve6(hostname, callback) - The same as dns.reslove4() except for IPv6 queries (an AAAA query).
 * dns.resolveMx(hostname, callback) - The same as dns.resolve(), but only for text queries (TXT records). addresses is a 2-d array of the text records available for hostname (e.g., [['v=spf1 ip4:0.0.0.0', '~all']]). Each sub-array contains TXT chunks of one record. Depending on the use case, they could be either together or treated separately.
 * dns.resolveSrv(hostname, callback) - The sam as dns.resolve(), but only for service records (SRV records). addressess is an array of SRV records available for hostname. Properties of SRV records are priority, weight, port, and name (e.g., [{'priority': 10, 'weight':5, 'port':21223, 'name':'service.example.com'}]).
 * dns.resolveSoa(hostname, callback) - The same as dns.resolve(), but only for start of authority record queries (SOA record).
 * dns.resolveNs(hostname, callback) - The same as dns.resolve(), but only for name server records (NS records). addresses is an array of the name server records available for hostname (e.g., ['ns1.example.com', 'ns2.example.com']).
 * dns.resolveCnamel(hostname, callback) - The same as dns.resolve(), but only for canonical name records (CNAME records). addresses is an array of canonical name records available for hostname (e.g., ['bar.example.com']).
 * dns.reverse(ip, callback) - Reverse resolves an ip address to an array of hostnames.
 * dns.reverse(ip, callback) - Reverse resolves an ip address to an array of hostnames.
 * dns.getServers() - Returns an array of IP addresses as strings that are currently being used for resolution.
 * dns.setServers(servers) - Given an array of IP addresses as strings, set them as the servers to use for resolving.
*/

/**rrtypes : Following is the list of valid rrtypes used by dns.resolve() method
 * A - IPV4 addresses, default
 * AAAA - IPV6 addresses
 * MX - mail exchange records
 * TXT - text records
 * SRV - SRV records
 * PTR - used for reverse IP lookups
 * NS - name server records
 * CNAME - canonical name records
 * SOA - start of authority record
 */

/**Error Codes : Each DNS query can return one of the following codes
 * dns.NODATA - DNS server returned answer with no data.
 * dns.FORMERR - DNS server claims query was misformatted.
 * dns.SERVERFAIL -DNS server returned general failure.
 * dns.NOTFOUND - Domain name not found.
 * dns.NOTIMP - DNS server does not implement requested oepration.
 * dns.REFUSED - DNS server refused query.
 * dns.BADQUERY - Misformatted DNS query.
 * dns.BADNAME - Misformatted hostname.
 * dns.BADFAMILY - Unsupported address family.
 * dns.BADRESP - Misformatted DNS reply.
 * dns.CONNREFUSED - Could not contact DNS servers.
 * dns.TIMEOUT - Timeout while contacting DNS servers.
 * dns.EOF - End of file.
 * dns.FILE - ERROR reading file.
 * dns.NOMEM - Out of memory.
 * dns.DESTRUCTION - Channel is being destroyed.
 * dns.BADSTR - Misformatted string.
 * dns.BADFLAGS - Illegal flags specified.
 * dns.NONAME - Given hostname is not numeric.
 * dns.BADHINTS - Illigal hints flags specified.
 * dns.NotINITIALIZED - c-ares library initialization not yet performed.
 * dns.LOADIPHLPAPI - Error loading iphlpapi.dll
 * dns.ADDRGETNETWORKPARAMS - Could not find GetNetworkParams function.
 * dns.CANCELLED - DNS query cancelled.
 */
//Example
let dns = require('dns');
dns.lookup('www.google.com', onLookup = async(err, address, family)=>{
	console.log("address:", address);
	console.log("family: ",family);
	dns.reverse(address, async (err, hostnames)=>{
		if(err) return console.log(err.stack);
		console.log(`reverse for ${address}:${JSON.stringify(hostnames)}`)
	});
})
