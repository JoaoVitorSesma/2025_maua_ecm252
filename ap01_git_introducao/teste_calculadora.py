# Imports 
import calculadora

# Main
## Inputs
v1 = int(input("Digite o Valor 1: "))
v2 = int(input("Digite o Valor 2: "))

## Testes
soma = calculadora.somar(v1, v2)
print(f"Somar {v1} + {v2} = {soma}")