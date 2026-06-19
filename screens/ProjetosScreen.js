import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function ProjetosScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Projetos</Text>

            <Text style={styles.projeto}>📚 Clube do Livro</Text>

            <Text>Sistema para gerenciamento de livros e participantes.</Text>

            <Text style={styles.projeto}>🐶 AdotaPet</Text>

            <Text>Plataforma para adoção responsável de animais.</Text>

            <Text style={styles.titulo}>Contato</Text>

            <Text>Email: beatriz@email.com</Text>

            <Text>GitHub: github.com/beatriz</Text>

            <Text>LinkedIn: linkedin.com/in/beatriz</Text>

            <TextInput placeholder="Digite sua mensagem" style={styles.input} />

            <Button title="Enviar contato" onPress={() => alert('Mensagem enviada!')} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5F8',
        padding: 20,
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#D87093',
        marginBottom: 15,
        marginTop: 10,
    },

    projeto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F08BA8',
        marginTop: 15,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FFD6E3',
        borderRadius: 15,
        padding: 15,
        marginVertical: 20,
    },
});
