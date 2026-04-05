import getAttrNameFromSelector from "@/utils/getAttrNameFromSelector.js";

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(       // парсим, т.е преобразуем строку в js объект
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector) // получаем чистое имя атрибута без скобок []
        )
    )  // возвращем полученный объект
}

export default  getParams