from bs4 import BeautifulSoup
import htmlmin

def clean_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Usamos BeautifulSoup para parsear el contenido HTML
    soup = BeautifulSoup(content, 'html.parser')

    # Eliminamos los atributos de todas las etiquetas
    for tag in soup.find_all(True):
        tag.attrs = {}

    # Obtenemos el contenido limpio
    clean_content = str(soup)

    # Minificamos el contenido limpio
    minified_content = htmlmin.minify(clean_content, remove_empty_space=True)

    return minified_content

def save_clean_html(clean_content, output_path):
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(clean_content)

# Ruta del archivo .html a limpiar
input_file_path = './input.html'

# Ruta del archivo de salida
output_file_path = './output.html'

# Limpiamos y minificamos el contenido del HTML
cleaned_html = clean_html(input_file_path)

# Guardamos el HTML limpio y minificado en un nuevo archivo
save_clean_html(cleaned_html, output_file_path)

print("El contenido HTML limpio y minificado ha sido guardado en", output_file_path)
