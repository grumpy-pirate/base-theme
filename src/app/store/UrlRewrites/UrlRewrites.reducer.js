/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import {
    UPDATE_URL_REWRITE,
    CLEAR_URL_REWRITE
} from './UrlRewrites.action';

export const initialState = {
    urlRewrite: {}
};

const UrlRewritesReducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE_URL_REWRITE:
        const { urlRewrite } = action;
        const { urlRewrite: { urlParam: url_param } } = state;

        return {
            ...state,
            urlRewrite: {
                url_param,
                ...urlRewrite
            }
        };
    case CLEAR_URL_REWRITE:
        return {
            ...state,
            urlRewrite: {}
        };
    default:
        return state;
    }
};

export default UrlRewritesReducer;
