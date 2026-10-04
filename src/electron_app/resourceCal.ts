import osUtils from 'os-utils'

const POLLING_INTERVAL =500

export   function resourceMonitoring (){
    setInterval(async() => {
        const cpuusage = await getCPU_Usage()
        console.log(cpuusage)
    }, POLLING_INTERVAL);
}




function getCPU_Usage(): Promise<number>{
    return new Promise((resolve)=>{
        osUtils.cpuUsage(resolve)
    })
}