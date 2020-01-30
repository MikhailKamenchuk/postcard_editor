export default class PostcardService {
    dummyData(){
            const importAll = (r) => {
                return r.keys().map(r)
            };
            const arr = importAll(require.context('../img/vd_cards', false, /\.(png|jpe?g|svg)$/));
            return arr.map(
                item => {
                    // eslint-disable-next-line no-useless-escape
                    let afterSlashChars = item.match(/\/([^\/]+)\/?$/)[1];
                    let arr = afterSlashChars.split('.');
                    return {
                        id: arr[0],
                        name: arr[0] + '.' + arr[1],
                        src: item
                    }
                }
            );
    };

    getPostcards() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dummyData());
                reject(new Error('Something bad happened with postcards'))
            }, 700)
        })
    }

    getCard(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.dummyData().find(item => item.id === id));
                reject(new Error('Something bad happened with card'))
            }, 700)
        })
    }

}