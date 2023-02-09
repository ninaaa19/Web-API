import express from 'express';
export class AppMiddleware {


static async test(req: express.Request, res: express.Response): Promise<void> {
        try{
            return res.status(200).end();
        } catch(err) {
            console.error('signup err', err);
            return res.status(500).end();
        }
    }

    /*Von Felix:
        static async test(req: express.Request, res: express.Response) {

        return res.status(200).end(JSON.stringify(await AppController.test()))

    }*/
    
/*
kommt wo hin?
static async test(){
        return 'test';
    }

// Error Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log('Running...');
});
*/

}
