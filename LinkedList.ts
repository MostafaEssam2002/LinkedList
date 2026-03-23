
class node<T> {
    data:T;
    next:node<T>|null;
    constructor(data:T){
        this.data=data
        this.next=null
    }
}
class LinkedList<T>{
    head:node<T>|null;
    private size:number;
    constructor(){
        this.head=null;
        this.size=0;
    }
    get Size():number{
        return this.size
    }
    insert(data:T){
        const newNode = new node(data)
        if(this.head===null){
            this.head = newNode;
            this.size++
            return
        }
        let current = this.head ;
        while(current.next){
            current = current.next;
        }
        current.next=newNode
        this.size++
    }
    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    delete(data:T){
        if(!this.head){
            return
        }
        if(this.head.data===data){
            this.head =this.head.next
            this.size--
            return
        }
        let current = this.head
        while(current.next&&current.next.data!==data){
            current=current.next
        }
        if(current.next){
            current.next = current.next.next
            this.size--
        }else{
            console.log("DATA NOT FOUND");
            
        }
    }
    insertBegining(data:T){
        const newNode = new node(data);
        newNode.next = this.head
        this.head = newNode 
        this.size++
    }
    deleteBegining(){
        if(!this.head){return}
        this.head = this.head.next
        this.size--
    }
    deleteEnd(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head=null
            this.size--
            return
        }
        let current = this.head;
        while(current.next&&current.next.next){
            current = current.next;
        }
        current.next=null;
        this.size--
    }
    getByIndex(index:number):T{
        if(!this.head){
            throw new Error( "list is emplty")
        }
        if (index < 0 || index >= this.size) {
            throw new Error( "Index out of bounds");
        }
        let current = this.head;
        let count =0;
        while(count < index){
            count++
            current = current.next!
        }
        return current.data
    }
    findByElement(element:T):number{
        let current = this.head;
        let count:number = 0;
        while(current){
            if(current.data===element){
                return count
            }
            count++
            current = current.next;
        }
        return -1
    }
    reverse() {
        let prev: node<T> | null = null;
        let current = this.head;
        let next = null
        while(current){
            next = current.next
            current.next = prev;
            prev = current
            current = next
        }
        this.head = prev
    }
    getNode(index:number):node<T>{
        if(!this.head){
            throw new Error( "list is emplty")
        }
        if (index < 0 || index >= this.size) {
            throw new Error( "Index out of bounds");
        }
        let current = this.head;
        let count =0;
        while(count < index){
            current = current.next!;
            count++;
        }
        return current 
    }
    setNode(index:number,data:T){
        let currentNode:node<T> = this.getNode(index)
        currentNode.data= data;
    }
    reversePiece(index1:number,index2:number){
        let newList = new LinkedList<T>();
        for(let i:number=index1;i<=index2;i++){
            newList.insertBegining(this.getByIndex(i))
        }
        newList.printList()
        let j=0
        while(index1<=index2){
            this.setNode(index1,newList.getNode(j).data)
            index1++
            j++
        }
    }
    insertAtIndex(index:number,data:T){
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if(index===0){
            this.insertBegining(data);
            return;
        }
        if (index === this.size) {
            return this.insert(data);
        }
        const newNode = new node(data);
        let prev = this.getNode(index-1)
        newNode.next=prev.next
        prev.next = newNode;
        this.size++
    }
    deleteAtIndex(index:number){
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if(index===0){
            return this.deleteBegining();
        }
        if(index===this.size-1){
            return this.deleteEnd();
        }
        let prev:node<T> = this.getNode(index-1)
        prev.next=prev.next?.next!
        this.size--;
    }
    toArray():T[]{
        let arr:T[] = []
        let current = this.head;
        while(current){
            arr.push(current.data)
            current = current.next;
        }
        return arr
    }
    findMiddle():T|null{
        if (!this.head) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while(fast&&fast.next){
            slow=slow.next!;
            fast = fast.next.next!
        }
        return slow.data
    }
    contains(data:T):boolean{
        if(!this.head){
            return false
        }
        let current= this.head;
        while(current){
            if(current.data===data){
                return true
            }
            current = current.next!
        }
        return false
    }
    detectCycle():boolean{
        if(!this.head){
            return false;
        }
        let slow=this.head;
        let fast=this.head;
        while(fast&&fast.next){
            slow = slow.next!;
            fast=fast.next.next!;
            if(slow===fast){
                return true;
            }
        }
        return false
    } 
    ReversePiece(left: number, right: number) {
        if (left === right) return;
        let dummy = new node<T>(null as any);
        dummy.next = this.head;
        let prev = dummy;
        for (let i = 0; i < left; i++) {
            prev = prev.next!;
        }
        let current = prev.next!;
        for (let i = 0; i < right - left; i++) {
            let next = current.next!;
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
        }
        this.head = dummy.next;
    }
}
