export default function getAge(birthDate: Date, currentDate: Date): number{
    const age = currentDate.getFullYear() - birthDate.getFullYear()

    return currentDate.getMonth() < birthDate.getMonth() ? age - 1 : age
}