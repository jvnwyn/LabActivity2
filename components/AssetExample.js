import { StyleSheet, Text, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function App() {
  return (  
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image
          source={require('./assets/1x1.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Jovan Wayne Andrade</Text>
        <Text style={styles.ageAndSec}>20 years old | BSCS 3-4</Text>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.desc}>I am a 3rd-year BS Computer Science student at Cavite State University – Main Campus, originally from General Mariano Alvarez, Cavite. I aspire to become a DevOps engineer, and to prepare for that path, I plan to pursue certifications such as the AWS Cloud Practitioner and AWS Solutions Architect Associate. These will help me build a strong foundation in cloud technologies and open more opportunities in the future. </Text>
        <Text style={styles.title}>Achievements</Text>
        <Text style={styles.desc}>{"\u2022"} Vice President for External Affairs, CSSO (A.Y. 2025 - 2026)</Text>
        <Text style={styles.desc}>{"\u2022"} STI College Carmona Tagisan ng Talino at Sining 2023 Codefest - Champion</Text>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.desc}>{"\u2022"} Git/GitHub</Text>
        <Text style={styles.desc}>{"\u2022"} Vibe Coding</Text>
        <Text style={styles.desc}>{"\u2022"} Linux</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',      
    backgroundColor: '#ecf0f1',
    padding: 18,
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 15,     
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
    alignSelf: 'center',
  },
  name: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ageAndSec: {
    marginBottom: 12,
    color: '#333333',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  desc: {
    fontSize: 13,
    color: '#333333',
  }
});

