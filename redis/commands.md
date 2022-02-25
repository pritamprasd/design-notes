### Playground
- Use docker-compose.yml to sping up redis docker container.
  - login with `docker exec -it <container-tag> redis-cli -a wubalubadubdub` 


## Redis Queue :
Convention:
- insert to queue : ADD : left of queue
- remove from queue : DEL : right of queue
- order is defined by position in the queue.
- left -> top, right -> bottom (cli output)

## Mappings:
### List: simple queue, with duplicate txns
The max length of a list is 2^32 - 1 elements (4294967295, more than 4 billion of elements per list).
#### Events:
  - pubsub
  - publish
  - subscribe
  - unsubscribe

#### Operations:
* lpush : push to queue, create a new queue if needed.
* lpushx : push to queue only if the queue exists.
* rpop : pop from queue
* lrem <list> n key  : ***pop n elements from a queue.when n is -ve oldest elements are removed. (if n is +ve then latest elemets are popped)
* rpoplpush a b :  pop an element from queue a(right) to and push it to queue b(left) 

#### Waiting operations:
* brpop : pop from a queue, wait if empty
* brpoplpush : rpoplpush, wait if a is empty


### Set: strict queue with distinct txns, 
  - useful when need to find `common`, `diff` of two queues.
  - `random-selection` of n txns from a pot/queue
  - basically any set related operation on queue
#### Operations:
* srandmember set n : get n random elements from pot


## Redis:
### Txn:
MULTI 
SET tutorial redis 
GET tutorial 
INCR visitors 
EXEC  
- `DISCARD`: discard from `MULTI`
- `WATCH`: The Redis WATCH command provides check-and-set (CAS) functionality to Redis transactions. Keys that are WATCHed are continuously monitored for changes; if even one WATCHed key is changed before the EXEC command is called, the entire transaction will be canceled and EXEC will return NULL to indicate that the transaction was unsuccessful.
    ```sh
    WATCH sampleKey
    num = GET sampleKey
    num = num + 1
    MULTI
    SET sampleKey $num
    EXEC
    ```
### backup:
- `SAVE` : synchronous blocking, saves data to disk
  - You almost never want to call SAVE in production environments where it will block all the other clients. Instead usually BGSAVE is used
  - last resort
- `BGSAVE`: asynchronous, background forked child process.

### Autodelete:
- `EXPIRE`
- `EXPIREAT`
- `PERSIST`
- `TTL`
- 








