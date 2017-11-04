export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';

export const searchSubmitAction = searchPayload => ({
    type: SEARCH_SUBMIT,
    meta: {
        callAPI: true,
        endpoint: '/v1/search/',
        params: {
            name: searchPayload.name || undefined,
            zipcode: searchPayload.zipcode || undefined,
        },
    },
});
