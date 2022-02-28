exports.seed = async function (knex) {
  await knex('counsellors').del()
  await knex('counsellors').insert([
    {
      id: 1,
      name: 'Courtney Brown',
      pronouns: 'She/Her',
      speciality: 'LGBTQI+',
      photo: './images/COU.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Courtney offers a ‘pluralistic’ approach, working in partnership with clients as the experts in their own lives. Together they work to determine which of a range of perspectives, tools and skills may be most helpful for the client at that time. Courtney has particular experience with self-compassion and mindfulness practices and has strong interests in neuropsychology and attachment theory. She has previously worked in hospital, palliative care, community and university settings.`,
    },
    {
      id: 2,
      name: 'Christine Stewart',
      pronouns: 'They/Them',
      speciality: 'Trauma',
      photo: './images/CHR.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Christine is a body-centred psychotherapist who will work with you to support the integration of your emotions with your physical and psychological experiences.`,
    },
    {
      id: 3,
      name: 'Cujo Burton',
      pronouns: 'They/Them',
      speciality: 'Grief',
      photo: './images/CUJ.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Cujo works with people in a non-judgemental, person-centred flexible way exploring their whole body responses to life issues. They work "existentially" placing peoples' values, beliefs, and resourcefulness at the centre of the work. Drawing from counselling methods like narrative, art therapy, psychodrama, cognitive behavioural therapy, Te Wheke and focusing; their approach is tailored to suit needs. Cujo uses emotionally focused therapy for couples because it works and couples like it. Working with adolescents, adults, couples and the elderly Cujo's experience spans a wide range of life issues and people of different cultures. Prior to 2007 Cujo worked in Finance, HR, IT, management and government.`,
    },
    {
      id: 4,
      name: 'Dellon Thomas',
      pronouns: 'She/Her',
      speciality: 'Anxiety',
      photo: './images/DEL.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Dellon is an experienced counsellor, group worker and supervisor who has been in private practice since 1987. She is committed to bringing spontaneity and creativity to all aspects of life and work. Dellon has worked extensively with clients with migrant and refugee backgrounds. Dellon also specialises in group work and regularly runs groups for strengthening resilience. Dellon is fluent in French and Italian and has limited knowledge of Te Reo Māori.`,
    },
    {
      id: 5,
      name: 'Natalie Sherwood',
      pronouns: 'He/Him',
      speciality: 'Te Whare Tapa Whā',
      photo: './images/NAT.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Natalie has a unique set of counselling skills, developed over 25 years, combining narrative therapy, cognitive behaviour therapy, mindfulness meditation, emotional agility and appreciative inquiry. Natalie also combines this with the latest research into happiness, trauma recovery, resilience and positive psychology.`,
    },
    {
      id: 6,
      name: 'Pauline Gertrude',
      pronouns: 'They/Them',
      speciality: 'Addiction',
      photo: './images/PAU.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Providing counselling services for individuals and couples Pauline's therapy is a non-judgemental way to assess your situation, see past limiting patterns and constructively move toward a desired outcome. A range of approaches are available, including emotionally focussed therapy, cognitive behavioural therapy,  psychodrama and a research-based model for couples.`,
    },
    {
      id: 7,
      name: 'Peter Plum',
      pronouns: 'He/Him',
      speciality: 'Relationships',
      photo: './images/PET.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Peter works with a variety of approaches to offer clients different options and ways to process through their difficulties. He enjoys making the counselling process as creative as possible by offering clients the use of drawing or working with objects or cards.`,
    },
    {
      id: 8,
      name: 'Tyrone Baxter',
      pronouns: 'She/Her',
      speciality: 'Stress',
      photo: './images/TYR.jpg',
      hours: 'Monday to Friday, Office Hours',
      biography: `Tyrone specialises in working with Māori whanau, including rangatahi and tamariki. She has particular skills and knowledge related to working with those affected by violence and abuse and those struggling with their cultural identity. She is also works with people presenting with a range of mental health issues, including depression, anxiety and grief.`,
    },
  ])
}
