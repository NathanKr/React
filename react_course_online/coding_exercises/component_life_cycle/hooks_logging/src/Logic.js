
class Logic{
    static write (className , funcName,ignore ,msg) {
        if(!ignore)
        {
            if(msg === undefined)
            {
                msg = '';
            }
            console.log(className,funcName,msg);
        }
    }
}

export default Logic;