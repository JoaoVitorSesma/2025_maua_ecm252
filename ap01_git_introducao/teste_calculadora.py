# Imports 
import calculadora

# Main
## Inputs
v1 = int(input("Digite o Valor 1: "))
v2 = int(input("Digite o Valor 2: "))

## Testes
### Soma
soma = calculadora.somar(v1, v2)
print(f"Somar: {v1} + {v2} = {soma}")

### Subtração
sub = calculadora.subtrair(v1, v2)
print(f"Subtrair: {v1} - {v2} = {sub}")

### Multiplicação
mult = calculadora.multiplicar(v1, v2)
print(f"Multiplicar: {v1} * {v2} = {mult}")