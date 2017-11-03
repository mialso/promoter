import devStore from './configureDevStore';
import prodStore from './configureProdStore';

function getStore(environment) {
    if (typeof environment !== 'string') {
        throw new Error('<Store>: getStore(): environment is not "string"');
    }
    if (environment === 'production') {
        return prodStore;
    }
    return devStore;
}

export default getStore(process.env.BUILD_ENV);

