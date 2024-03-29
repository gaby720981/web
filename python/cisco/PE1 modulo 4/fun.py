# Tu primer función
# Observa el fragmento de código en el editor.

# Es bastante sencillo, es un ejemplo de como transformar una parte de código que se está repitiendo en una función.

# El mensaje enviado a la consola por la función print() es siempre el mismo. El código es funcional y no contiene errores, sin embargo imagina que tendrías que hacer si tu jefe pidiera cambiar el mensaje para que fuese más cortés, por ejemplo, que comience con la frase "Por favor,".

# Tendrías que tomar algo de tiempo para cambiar el mensaje en todos los lugares donde aparece (podrías hacer uso de copiar y pegar, pero eso no lo haría más sencillo). Es muy probable que cometas errores durante el proceso de corrección, eso traería frustración a ti y a tu jefe.


# ¿Es posible separar ese código repetido, darle un nombre y hacerlo reutilizable? Significaría que el cambio hecho en un solo lugar será propagado a todos los lugares donde se utilice.

# Para que esto funcione, dicho código debe ser invocado cada vez que se requiera.

# Es posible, esto es exactamente para lo que existen las funciones.

# print("Ingresa un valor: ")
# a = int(input())

# print("Ingresa un valor: ")
# b = int(input())

# print("Ingresa un valor: ")
# c = int(input())

#resolucion:

def message():
    print("Ingresa un valor: ")

message()
a = int(input())

message()
b = int(input())

message()
c = int(input())
