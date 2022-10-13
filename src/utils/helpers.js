export const formatPrice = (number) => {

    return Intl.NumberFormat('vi-VN', {
        style:'currency',
        currency:'VND',
    }).format(number)

}