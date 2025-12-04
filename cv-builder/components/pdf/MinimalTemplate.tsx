import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';
import { Translations } from '../../lib/translations';



const styles = StyleSheet.create({
    body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 40,
    fontFamily: 'Times-Roman'
  },

  // Header
  name: {
    fontSize: 28,
    fontFamily: 'Oswald',
  },
  role: {
    fontSize: 14,
    marginBottom: 10
  },
  contact: {
    fontSize: 10,
    color: 'grey',
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Oswald',
    marginTop: 20,
    marginBottom: 8
  },

  text: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'justify',
  },

  listItem: {
    fontSize: 12,
    marginLeft: 12,
    marginBottom: 4,
  },

  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  },
});

interface Props {
    data: CVData;
    t: any;
}

const MinimalTemplate: React.FC<Props> = ({ data, t }) => {
    return (
        <Document>
             <Page style={styles.body}>

      {/* PROFILE PICTURE */}
        <Image style={styles.profileImage} src={data.personal.photo}/>

      {/* NAME + ROLE */}
      <Text style={styles.name}>{data.personal.fullName}</Text>
      <Text style={styles.role}>Interior Designer</Text>

      {/* CONTACT INFO */}
      <Text style={styles.contact}>
        999-111-2222 • New York, NY • ryan@interiordesign.com • linkedin.com/in/ryandesign
      </Text>

      {/* SUMMARY */}
      <Text style={styles.sectionTitle}>SUMMARY</Text>
      <Text style={styles.text}>
        Highly efficient and results-driven interior designer with over 10 years
        of experience in the design and hospitality industry. Creative, organized,
        and dedicated to delivering modern and functional design solutions.
      </Text>

      {/* SKILLS */}
      <Text style={styles.sectionTitle}>CORE COMPETENCIES</Text>
      <Text style={styles.listItem}>• Set Design – 10/10</Text>
      <Text style={styles.listItem}>{}</Text>
      <Text style={styles.listItem}>• Negotiation – 10/10</Text>
      <Text style={styles.listItem}>• Communication – 10/10</Text>
      <Text style={styles.listItem}>• Interior Design – 10/10</Text>

      {/* EXPERIENCE */}
      <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

      {data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.experience}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.text}>{exp.position}</Text>
                                    <Text style={styles.text}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                </View>
                                <Text style={styles.listItem}>{exp.company}, {exp.location}</Text>
                                <Text style={styles.listItem}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

      <Text style={styles.text}><strong>Interior Designer – Lululemon</strong> (2014 – 2017)</Text>
      <Text style={styles.listItem}>• Led B2B design operations.</Text>
      <Text style={styles.listItem}>• Managed product research and innovation.</Text>
      <Text style={styles.listItem}>• Oversaw wholesale design processes.</Text>

      {/* EDUCATION */}
      <Text style={styles.sectionTitle}>EDUCATION</Text>
      <Text style={styles.text}><strong>Bachelor of Commerce</strong> – University of Pennsylvania (2006–2009)</Text>
      <Text style={styles.listItem}>• Captain of the Debate Team</Text>
      <Text style={styles.listItem}>• Contributor to the Student Newspaper</Text>

      {/* PORTFOLIO */}
      <Text style={styles.sectionTitle}>PORTFOLIO</Text>



      {/* PAGE NUMBER */}
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
        fixed
      />

    </Page>
        </Document>
    );
};

export default MinimalTemplate;
