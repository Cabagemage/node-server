// Модуль для обработки путей

export const routeNormalizer = (url?: string):string => {
    if(!url){
        throw Error("Url has not been passed")
    }

    const rawUrlWithoutQueryParams = url.split("?")[0];


    return rawUrlWithoutQueryParams
}