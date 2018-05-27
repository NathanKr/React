
class Logic{
    static write (className , funcName,msg) {
        if(msg === undefined)
        {
            msg = '';
        }
        console.log(className,funcName,msg);
    }
}

export default Logic;